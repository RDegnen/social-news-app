import Ember from 'ember';

export default Ember.Route.extend({
  auth: Ember.inject.service(),

  actions: {
    signUp(credentials) {
      console.log('Route: Sign-up', credentials);
      this.get('auth').signUp(credentials)
      .then(() => this.get('auth').signIn(credentials))
      .then(() => {
        console.log('Successfully signed-up! You have also been signed-in.');
      })
      .catch(() => {
        console.log('There was a problem. Please try again.');
      });
    },
    signIn(credentials) {
      console.log('Sign-in', credentials);
      return this.get('auth').signIn(credentials)
      .then(() => console.log('Thanks for signing in!'))
      .catch(() => {
        console.log('There was a problem. Please try again.');
      });
    },
    signOut() {
      this.get('auth').signOut()
      .then(() => {
        console.log('You have been signed out.');
      })
      .catch((error) => {
        console.log(error);
        console.log('There was a problem. Are you sure you\'re signed-in?');
      });
    },
  },
});
