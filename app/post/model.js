import Model from 'ember-data/model';
import DS from 'ember-data';
import Ember from 'ember';
// import attr from 'ember-data/attr';
import { belongsTo, hasMany } from 'ember-data/relationships';

export default Model.extend({
  user: belongsTo('user'),
  comments: hasMany('comments'),

  title: DS.attr('string'),
  content: DS.attr('string'),
  user_id: DS.attr('number'),
  created_at: DS.attr('date'),

  timeSinceCreated: Ember.computed('created_at', function(){
    let created = this.get('created_at');
    let seconds = Math.floor((new Date() - created) / 1000);

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
