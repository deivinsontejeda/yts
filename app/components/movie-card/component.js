import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['movie-card'],
  classNameBindings: ['isActive:active'],
  isActive: true,

  click(e) {
    if (e.target.tagName !== 'A' && !this.get('isActive')) {
      var link = this.$('.movie-link');

      if (e.metaKey) {
        window.open(link.attr('href'), '_blank').focus();
      } else {
        link.click();
      }

      return false;
    } else {
      return true;
    }
  }
});
