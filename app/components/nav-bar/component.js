import Ember from 'ember';

export default Ember.Component.extend({
  credentials: {},
  registerCredentials: {},
  auth: Ember.inject.service(),

  actions: {
    routeSignUp () {
      this.sendAction('routeSignUp', this.get('registerCredentials'));
      this.set('isShowingModal', false);
    },
    routeSignIn () {
      this.sendAction('routeSignIn', this.get('credentials'));
      this.set('isShowingModal', false);
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
