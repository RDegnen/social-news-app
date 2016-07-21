import Ember from 'ember';

export default Ember.Route.extend({
  auth: Ember.inject.service(),

  actions: {
    createPost(post) {
      this.get('auth').createPost(post)
      .then(() => {
        this.transitionTo(`posts`);
      })
      .then(() => console.log('Post crated!'))
      .catch(console.error);
    }
  },
});
