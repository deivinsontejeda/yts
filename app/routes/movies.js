import Ember from 'ember';
import config from '../config/environment';

const { computed } = Ember;

export default Ember.Route.extend({
  url: computed(function() {
    return `${config.YTS_BASE_URL}/list_movies.json`;
  }),

  model() {
    return Ember.$.getJSON(this.get('url'))
      .then(({ data }) => {
        let results = data.movies;

        let movies = Ember.A();

        results.forEach((movie) => {
          let attrs = { id: movie.id,
                        url: movie.url,
                        title: movie.title,
                        year: movie.year,
                        imdbCode: movie.imdb_code,
                        mediumCoverImage: movie.medium_cover_image,
                        smallCoverImage: movie.small_cover_image };
          movies.push(this.store.createRecord('movie', attrs));
        });

        return movies;
    });
  }
});
