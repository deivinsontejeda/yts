import Ember from 'ember';

export default Ember.Controller.extend({
  showingNavBar: false,

  actions: {
    toggleNavBar() {
      this.toggleProperty('showingNavBar');
    }
  }
});
