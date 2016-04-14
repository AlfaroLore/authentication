import JSONAPISerializer from 'ember-data/serializers/json-api';

export default DS.JSONAPISerializer.extend({

  normalizeFindRecordResponse(store, type, payload) {
    return {
      data: {
        id: 1,
        type: "user",
        attributes: {
          name: payload.UserSID
        }
      }
    };
  }
});
