import DS from 'ember-data';

export default DS.Model.extend({
	Username: DS.attr('string'),
    Nickname: DS.attr('string'),
    FirstName: DS.attr('string'),
    LastName: DS.attr('string')
});