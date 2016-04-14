import DS from 'ember-data';
import DataAdapterMixin from 'ember-simple-auth/mixins/data-adapter-mixin';

export default DS.RESTAdapter.extend(DataAdapterMixin,{
	host: 'http://192.168.1.172',
  	namespace : 'KidsChooseApi/v1.0/mobile/users',
  	authorizer: "authorizer:custom"
});
