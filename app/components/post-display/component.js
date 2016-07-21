import Ember from 'ember';
import { storageFor } from 'ember-local-storage';

export default Ember.Component.extend({
  credentials: storageFor('auth'),

  isOwner: Ember.computed(function() {
    return this.get('credentials').get('id') === this.ownerId;
  }),

  actions: {
    delete() {
      this.sendAction('delete', this.get('post'));
    }
  }
});
