import Ember from 'ember';

export default Ember.Route.extend({
  auth: Ember.inject.service(),

  actions: {
    createPost(post) {
      let newPost = this.store.createRecord('post', post);

      newPost.save()
        .then((post) => {
          console.log('Post Created!');
          this.transitionTo(`posts/${post.id}`);
        });
    }
  },
});
