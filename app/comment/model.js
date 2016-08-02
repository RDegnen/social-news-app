import Model from 'ember-data/model';
import DS from 'ember-data';
// import attr from 'ember-data/attr';
import { belongsTo, hasMany } from 'ember-data/relationships';

export default Model.extend({
  user: belongsTo('user'),
  post: belongsTo('post'),

  parent: belongsTo('comment', {inverse: 'children'}),
  children: hasMany('comment', {inverse: 'parent'}),

  content: DS.attr('string'),
  pidentifier: DS.attr('number'),
});
