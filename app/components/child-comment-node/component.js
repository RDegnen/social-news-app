import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['child-comment-node'],
  auth: Ember.inject.service(),

  actions: {
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
