import Ember from 'ember';
import { storageFor } from 'ember-local-storage';

export default Ember.Service.extend({
  ajax: Ember.inject.service(),
  credentials: storageFor('auth'),
  isAuthenticated: Ember.computed.bool('credentials.token'),

  signUp(credentials) {
    return this.get('ajax').post('/sign-up', {
      data: {
        credentials: {
          username: credentials.username,
          email: credentials.email,
          password: credentials.password,
          password_confirmation: credentials.passwordConfirmation,
        },
      },
    });
  },

  signIn(credentials) {
    return this.get('ajax').post('/sign-in', {
      data: {
        credentials: {
          username: credentials.username,
          password: credentials.password,
        },
      },
    })
    .then((result) => {
      this.get('credentials').set('id', result.user.id);
      this.get('credentials').set('username', result.user.username);
      this.get('credentials').set('email', result.user.email);
      this.get('credentials').set('token', result.user.token);
    });
  },

  changePassword(passwords) {
    return this.get('ajax').patch(`/change-password/${this.get('credentials.id')}`, {
      data: {
        passwords: {
          old: passwords.previous,
          new: passwords.next,
        },
      },
    });
  },

  signOut() {
    return this.get('ajax').del(`/sign-out/${this.get('credentials.id')}`)
    .finally(() => this.get('credentials').reset());
  },

  createPost(post) {
    return this.get('ajax').post(`/posts`, {
      data: {
        title: post.title,
        content: post.content,
      }
    });
  },
});
