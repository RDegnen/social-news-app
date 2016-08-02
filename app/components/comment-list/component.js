import Ember from 'ember';

export default Ember.Component.extend({
  auth: Ember.inject.service(),

  userId: Ember.computed(function() {
    return this.get('auth').get('credentials').content.id.toString();
  }),

  actions: {
    delete(comment) {
      this.sendAction('delete', comment);
    }
  },
});
