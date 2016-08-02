import Ember from 'ember';

export default Ember.Component.extend({
  auth: Ember.inject.service(),

  comment: {
    content: ""
  },

  actions: {
    newComment() {
      this.sendAction('newComment', this.get('comment'));
    },
  }
});
