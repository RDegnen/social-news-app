import Model from 'ember-data/model';
import DS from 'ember-data';
import Ember from 'ember';
// import attr from 'ember-data/attr';
import { belongsTo, hasMany } from 'ember-data/relationships';

export default Model.extend({
  user: belongsTo('user'),
  post: belongsTo('post'),

  parent: belongsTo('comment', {inverse: 'children'}),
  children: hasMany('comment', {inverse: 'parent'}),

  content: DS.attr('string'),
  postidentifier: DS.attr('number'),
  parentidentifier: DS.attr('number'),
  created: DS.attr('date'),

  timeSinceCreated: Ember.computed('created', function(){
    let created = this.get('created');

    let seconds = Math.floor((new Date() - new Date(created)) / 1000);

    let interval = Math.floor(seconds / 31536000);

    if (interval > 1) {
      return interval + " years";
    }
    interval = Math.floor(seconds / 2592000);
    if (interval > 1) {
        return interval + " months";
      }
    interval = Math.floor(seconds / 86400);
    if (interval > 1) {
        return interval + " days";
      }
    interval = Math.floor(seconds / 3600);
    if (interval > 1) {
        return interval + " hours";
      }
    interval = Math.floor(seconds / 60);
    if (interval > 1) {
        return interval + " minutes";
      }
    return Math.floor(seconds) + " seconds";
  })
});
