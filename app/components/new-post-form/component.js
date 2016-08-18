import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['flex-container'],

  post: {
    title: "",
    content: ""
  },

  actions: {
    newPost() {
      this.sendAction('newPost', this.get('post'));
      this.set('post.title', "");
      this.set('post.content', "");
    }
  },
});
