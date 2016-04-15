import Ember from 'ember';
export default Ember.Component.extend({
	session: Ember.inject.service(),
    gotQuote: false,
    quote: "",
    actions: {
        getQuote: function() {
	        	this.get('session').authorize('authorizer:custom', (headerName, headerValue) => { 
	        	const headers = {};
	        	headers[headerName] = headerValue;
	            var that = this;
	            Ember.$.ajax({
	                type: 'GET',
	                url: 'http://192.168.1.172/KidsChooseApi/v1.0/mobile/users/profile',
	                headers: headers,
	                success: function(response) {
	                    that.setProperties({
	                        quote: response.UserSID,
	                        gotQuote: true
	                    });
	                },
	                error: function(xhr) {
	                    alert('Request Status: ' + xhr.status + ' Status Text: ' + xhr.statusText + ' ' + xhr.responseText);
	                }
	            });
	        });
        }
    }
});