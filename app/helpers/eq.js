import Ember from 'ember';

const eq = (params) => parseInt(params[0]) === params[1];
export default Ember.Helper.helper(eq);
