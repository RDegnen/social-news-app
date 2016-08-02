import Ember from 'ember';

export default Ember.Route.extend({

  model(params) {
    this.store.findAll('comment');
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

    createComment(comment) {
      let newComment = this.store.createRecord('comment', comment);
      newComment.pidentifier = this.controller.get('model').id;
      newComment.save()
        .then(() => console.log('Comment Created'));
    },
  },
});
