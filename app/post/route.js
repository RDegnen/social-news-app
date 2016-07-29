import Ember from 'ember';

export default Ember.Route.extend({
  ajax: Ember.inject.service(),

  model(params) {
    return this.store.findRecord('post', params.post_id);
  },

  actions: {
    destroyPost(post) {
      post.destroyRecord()
        .then(() => this.transitionTo('posts'))
        .catch(console.log);
    },

    updatePost(post) {
      post.save();
    },
  },
});
