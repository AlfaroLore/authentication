
import DS from 'ember-data';

export default DS.RESTSerializer.extend({	
    normalizeFindAllResponse(store, type, payload) {
    return {
      data: [{
      	id:"1",
      	type: 'profile',
      	attributes: {
      		Username: payload.MyProfile.Username,
          	Nickname:payload.MyProfile.Nickname,
          	FirstName: payload.MyProfile.FirstName,
          	LastName:payload.MyProfile.LastName,
      	},        
      }]
    };
  }
});
