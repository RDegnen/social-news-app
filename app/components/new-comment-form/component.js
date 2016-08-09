import Ember from 'ember';

export default Ember.Component.extend({
  auth: Ember.inject.service(),

  comment: {
    content: ""
  },

  actions: {
    newChild(id) {
      let comment = this.get('comment');
      comment.parent = id;
      this.sendAction('newChild', comment);
      this.set('comment.content', "");
      this.sendAction('closeReply');
    },

    closeReply() {
      this.sendAction('closeReply');
    },
  }
});
