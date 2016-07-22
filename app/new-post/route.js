import Ember from 'ember';

export default Ember.Route.extend({
  auth: Ember.inject.service(),

  actions: {
    createPost(post) {
      this.store.createRecord('post', post)
        .save()
        .then((post) => {
          console.log('Post Created!');
          this.transitionTo(`posts/${post.id}`);
        })
        .catch(console.log);
    }
  },
});
