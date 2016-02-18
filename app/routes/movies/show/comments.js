import Ember from 'ember';
import config from '../../../config/environment';

const { computed } = Ember;

export default Ember.Route.extend({

  url: computed(function() {
    let movie = this.modelFor('movies.show');
    return `${config.YTS_BASE_URL}/movie_comments.json?movie_id=${movie.id}`;
  }),

  model() {
    return Ember.$.getJSON(this.get('url'))
      .then(({ data }) => {
      let result = data.comments.splice(0, config.APP.AMOUNT_ELEMENTS);

      let list = Ember.A();

      result.forEach((comment) => {
        let attrs = {
          id: comment.id,
          username: comment.username,
          submitted: comment.date_added,
          body: comment.comment_text
        };
        list.addObject(this.store.createRecord('comment', attrs));
      });

      return list;
    });
  }
});
