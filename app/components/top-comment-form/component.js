import Ember from 'ember';

export default Ember.Component.extend({
  auth: Ember.inject.service(),

  comment: {
    content: ""
  },

  actions: {
    newComment() {
      let comment = this.get('comment');
      this.sendAction('newComment', comment);
      this.set('comment.content', "");
    },
  }
});
