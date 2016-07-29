import Model from 'ember-data/model';
import DS from 'ember-data';
// import attr from 'ember-data/attr';
import { hasMany } from 'ember-data/relationships';

export default Model.extend({
  posts: hasMany('posts'),
  comments: hasMany('comments'),

  username: DS.attr('string'),
  email: DS.attr('string'),
});
