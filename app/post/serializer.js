import JSONAPISerializer from 'ember-data/serializers/json-api';

export default JSONAPISerializer.extend({
  serialize(snapshot, options) {
    let json = this._super(...arguments);

    // delete json.data.attributes.user-id;
    // delete json.data.attributes.created-at;
    console.log(json);
  },

  normalizeFindAllResponse(store, type, payload) {
    payload.data = payload.posts;
    delete payload.posts;

    for (let i = 0; i < payload.data.length; i++) {
      payload.data[i].attributes = {};
      let attrs = payload.data[i].attributes;

      payload.data[i].type = type.modelName;

      attrs.title = payload.data[i].title;
      attrs.content = payload.data[i].content;
      attrs.owner = payload.data[i].user_id;
      attrs.created = payload.data[i].created_at;
      attrs.updated = payload.data[i].updated_at;

      delete payload.data[i].title;
      delete payload.data[i].content;
      delete payload.data[i].user_id;
      delete payload.data[i].created_at;
      delete payload.data[i].updated_at;
    }
    return payload;
  }
});
