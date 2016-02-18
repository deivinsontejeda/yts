import DS from 'ember-data';

export default DS.Model.extend({
  userAvatar: DS.attr('string'),
  username:   DS.attr('string'),
  body:       DS.attr('string'),
  submitted:  DS.attr('date')
});
