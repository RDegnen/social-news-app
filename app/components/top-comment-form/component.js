import Ember from 'ember';

export default Ember.Component.extend({
  auth: Ember.inject.service(),

  comment: {
    content: ""
  },

  actions: {
    newComment() {
      let comment = this.get('comment');
      console.log(comment);
      this.sendAction('newComment', comment);
    },
  }
});
