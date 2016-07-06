import Ember from 'ember';

export default Ember.Component.extend({
  credentials: {},
  auth: Ember.inject.service(),

  actions: {
    routeSignUp () {
      this.sendAction('routeSignUp', this.get('credentials'));
    },
    routeSignIn () {
      this.sendAction('routeSignIn', this.get('credentials'));
    },
    routeSignOut () {
      this.sendAction('routeSignOut');
    },
    open (){
      console.log('open modal');
      this.set('isShowingModal', true);
    },
    close (){
      console.log('close modal');
      this.set('isShowingModal', false);
    },
  },
});
