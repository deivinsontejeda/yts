import Ember from 'ember';
import config from '../../config/environment';

const { computed } = Ember;

export default Ember.Route.extend({
  beforeModel() {
    this.controllerFor('movies').set('hasContent', true);
  },

  url: computed(function() {
    return `${config.YTS_BASE_URL}/movie_details.json`;
  }),

  model(params) {
    let movie = this.store.peekRecord('movie', params.movie_id);

    return Ember.$.getJSON(this.get('url') + '?movie_id=' + params.movie_id)
      .then(({ data }) => {
        movie.set('descriptionFull', data.description_full);

        data.movie.torrents.forEach((torrent) => {
          let attrs = {
            url: torrent.url,
            quality: torrent.quality,
            dateUploaded: torrent.date_uploaded
          };
          movie.get('torrents').pushObject(this.store.createRecord('torrent', attrs));
        });

        return movie;
      });
  }
});
