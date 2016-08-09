import Ember from 'ember';

export default Ember.Component.extend({
  auth: Ember.inject.service(),

  userId: Ember.computed(function() {
    return this.get('auth').get('credentials').content.id === undefined ? null :
      this.get('auth').get('credentials').content.id.toString();
  }),

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
    openEdit() {
      this.set('isEditing', true);
    },
    closeEdit() {
      this.set('isEditing', false);
    },
    openReply() {
      this.set('replying', true);
    },
  },
});
