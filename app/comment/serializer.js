import JSONAPISerializer from 'ember-data/serializers/json-api';

export default JSONAPISerializer.extend({
  serialize() {
    let json = this._super(...arguments);

    return {
      content: json.data.attributes.content,
      post_id: json.data.attributes.pidentifier,
    };
  },

  findAll(store, type, payload) {
    payload.data = payload.comments;
    delete payload.comments;

    for (let i = 0; i < payload.data.length; i++) {
      payload.data[i].attributes = {};
      payload.data[i].relationships = {};

      let attrs = payload.data[i].attributes;
      let rels = payload.data[i].relationships;

      rels.user = {};
      rels.post = {};
      rels.user.data = {};
      rels.post.data = {};
      let userData = rels.user.data;
      let postData = rels.post.data;

      payload.data[i].type = type.modelName;

      attrs.content = payload.data[i].content;
      attrs.created = payload.data[i].created_at;
      attrs.updated = payload.data[i].updated_at;

      userData.id = payload.data[i].user_id;
      userData.type = "user";
      postData.id = payload.data[i].post_id;
      postData.type = "post";

      delete payload.data[i].content;
      delete payload.data[i].user_id;
      delete payload.data[i].post_id;
      delete payload.data[i].created_at;
      delete payload.data[i].updated_at;
    }

    return payload;
  },

  normalizeResponse(store, type, payload, id, requestType) {
    if (requestType === "findAll") {
      return this.findAll(store, type, payload);
    }

    payload.data = payload.comment;
    payload.data.attributes = {};
    payload.data.relationships = {};

    let attrs = payload.data.attributes;
    let rels = payload.data.relationships;

    rels.user = {};
    rels.post = {};
    rels.user.data = {};
    rels.post.data = {};
    let userData = rels.user.data;
    let postData = rels.post.data;

    payload.data.type = type.modelName;

    attrs.content = payload.data.content;
    attrs.created = payload.data.created_at;
    attrs.updated = payload.data.updated_at;

    userData.id = payload.data.user_id;
    userData.type = "user";
    postData.id = payload.data.post_id;
    postData.type = "post";

    delete payload.data.content;
    delete payload.data.user_id;
    delete payload.data.post_id;
    delete payload.data.created_at;
    delete payload.data.updated_at;
    delete payload.comment;

    return payload;
  }
});
