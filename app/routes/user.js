import Ember from 'ember';

export default Ember.Route.extend({
	session: Ember.inject.service(),
	model() {
    	return this.store.findAll('profile'); // or any other user you like
  	}
});
