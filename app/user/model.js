import Model from 'ember-data/model';
import DS from 'ember-data';
// import attr from 'ember-data/attr';
import { hasMany } from 'ember-data/relationships';

export default Model.extend({
  posts: hasMany('post'),
  comments: hasMany('comment'),

  username: DS.attr('string'),
  email: DS.attr('string'),
});
