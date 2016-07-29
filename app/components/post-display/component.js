import Ember from 'ember';
import { storageFor } from 'ember-local-storage';

export default Ember.Component.extend({
  credentials: storageFor('auth'),

  isOwner: Ember.computed(function() {
    return this.get('credentials').get('id') === parseInt(this.owner.content.id);
  }),

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
