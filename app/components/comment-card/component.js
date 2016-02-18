import Ember from 'ember';

const { computed } = Ember;

export default Ember.Component.extend({
  classNames: ['comment-card'],
  classNameBindings: ['isExpanded:expanded', 'isHighlighted:highlighted'],

  bodyStyle: computed('comment.quality', function() {
    let quality = this.get('comment.quality');

    if (typeof quality === 'undefined') {
      quality = 1;
    }

    return `opacity: ${quality}`;
  }),

  actions: {
    toggleReplies() {
      let expanded = this.toggleProperty('isExpanded');

      if (expanded) {
        this.expandAll();
      }
    }
  }
});
