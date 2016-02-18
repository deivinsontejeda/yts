import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('movies', function() {
    this.route('show', { path: ':movie_id'}, function() {
      this.route('comments');
      this.route('torrents');
    });
  });
});

export default Router;
