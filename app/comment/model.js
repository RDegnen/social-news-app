import Model from 'ember-data/model';
import DS from 'ember-data';
// import attr from 'ember-data/attr';
import { belongsTo, hasMany } from 'ember-data/relationships';

export default Model.extend({
  user: belongsTo('user'),
  post: belongsTo('post'),

  comment: belongsTo('comment'),
  comments: hasMany('comments'),

  content: DS.attr('string'),
  user_id: DS.attr('number'),
  post_id: DS.attr('number'),
  comment_id: DS.attr('number'),
});
