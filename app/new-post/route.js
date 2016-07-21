import Ember from 'ember';

export default Ember.Route.extend({
  auth: Ember.inject.service(),

  actions: {
    createPost(post) {
      console.log('Route: Create Post');
      this.get('auth').createPost(post)
      .then((post) => {
        this.transitionTo(`posts/${post.id}`);
      })
      .then(() => console.log('Post crated!'))
      .catch((error) => console.log(error));
    }
  },
});
