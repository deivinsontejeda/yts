
import DS from 'ember-data';

export default DS.Model.extend({
  url:              DS.attr('string'),
  title:            DS.attr('string'),
  year:             DS.attr('string'),
  imdbCode:         DS.attr('integer'),
  smallCoverImage:  DS.attr('string'),
  mediumCoverImage: DS.attr('string'),
  descriptionFull:  DS.attr('string'),
  torrents:         DS.hasMany('torrent')
});
