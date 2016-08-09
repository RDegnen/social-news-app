import Ember from 'ember';

export default Ember.Component.extend({

  actions: {
    newComment(comment) {
      this.sendAction('newComment', comment);
    },
    delete(comment) {
      this.sendAction('delete', comment);
    },
    update(comment) {
      this.sendAction('update', comment);
      this.set('isEditing', false);
    },
  },
});
