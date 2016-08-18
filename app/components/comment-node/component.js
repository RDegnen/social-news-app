import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['padding-wrapper'],
  auth: Ember.inject.service(),

  actions: {
    newComment(comment) {
      this.sendAction('newComment', comment);
    },
    newChild(comment) {
      this.sendAction('newChild', comment);
    },
    delete(comment) {
      this.sendAction('delete', comment);
    },
    update(comment) {
      this.sendAction('update', comment);
      this.set('isEditing', false);
    },

    openEdit() {
      this.set('isEditing', true);
    },
    closeEdit() {
      this.set('isEditing', false);
    },

    openReply() {
      this.set('replying', true);
    },
    closeReply() {
      this.set('replying', false);
    },
  },
});
