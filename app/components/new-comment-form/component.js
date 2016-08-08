import Ember from 'ember';

export default Ember.Component.extend({
  auth: Ember.inject.service(),

  comment: {
    content: ""
  },

  actions: {
    newComment(id) {
      let comment = this.get('comment');
      comment.parent = id;
      this.sendAction('newComment', comment);
    },
  }
});
