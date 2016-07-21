import Ember from 'ember';

export default Ember.Component.extend({
  post: {
    title: "",
    content: ""
  },

  actions: {
    newPost() {
      this.sendAction('newPost', this.get('post'));
    }
  },
});
