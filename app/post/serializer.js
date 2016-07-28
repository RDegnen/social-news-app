import JSONAPISerializer from 'ember-data/serializers/json-api';

export default JSONAPISerializer.extend({
  serialize() {
    let json = this._super(...arguments);

    return {
      content: json.data.attributes.content,
      title: json.data.attributes.title,
    };
  },

  normalizeFindAllResponse(store, type, payload) {
    payload.data = payload.posts;
    delete payload.posts;

    for (let i = 0; i < payload.data.length; i++) {
      payload.data[i].attributes = {};
      payload.data[i].relationships = {};

      let attrs = payload.data[i].attributes;
      let rels = payload.data[i].relationships;
      
      rels.user = {};
      rels.user.data = {};
      let userData = rels.user.data;

      payload.data[i].type = type.modelName;

      attrs.title = payload.data[i].title;
      attrs.content = payload.data[i].content;
      attrs.created = payload.data[i].created_at;
      attrs.updated = payload.data[i].updated_at;

      userData.id = payload.data[i].user_id;
      userData.type = "user";

      delete payload.data[i].title;
      delete payload.data[i].content;
      delete payload.data[i].user_id;
      delete payload.data[i].created_at;
      delete payload.data[i].updated_at;
    }

    return payload;
  },

  normalizeFindRecordResponse(store, type, payload) {
    payload.data = payload.post;
    payload.data.attributes = {};
    let attrs = payload.data.attributes;

    payload.data.type = type.modelName;

    attrs.title = payload.data.title;
    attrs.content = payload.data.content;
    attrs.owner = payload.data.user_id;
    attrs.created = payload.data.created_at;
    attrs.updated = payload.data.updated_at;

    delete payload.data.title;
    delete payload.data.content;
    delete payload.data.user_id;
    delete payload.data.created_at;
    delete payload.data.updated_at;
    delete payload.post;

    return payload;
  },
});
