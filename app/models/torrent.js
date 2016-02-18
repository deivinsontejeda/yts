import DS from 'ember-data';

export default DS.Model.extend({
  url:          DS.attr('string'),
  quality:      DS.attr('string'),
  dateUploaded: DS.attr('date'),
  movie:        DS.belongsTo('movie')
});
