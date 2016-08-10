import Ember from 'ember';

export default Ember.Component.extend({
  auth: Ember.inject.service(),

  actions: {
    delete() {
      this.sendAction('delete', this.get('post'));
    },
    update() {
      this.sendAction('update', this.get('post'));
      this.set('isEditing', false);
    },
    openEdit() {
      this.set('isEditing', true);
    },
    closeEdit() {
      this.set('isEditing', false);
    },
  }
});
