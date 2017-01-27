import Ember from 'ember';
import KeyboardShortcuts from 'ember-keyboard-shortcuts/mixins/component';

export default Ember.Component.extend(KeyboardShortcuts, {
  ajax: Ember.inject.service(),

  imageUrl: '',
  progressText: '',
  errorText: '',

  actions: {
    engrave: function(event){
      this.set('progressText', 'in progress...');
      let url = 'https://lilypond-api.herokuapp.com/scores/';
      let options = {
        method: 'POST',
        contentType: 'text/plain',
        dataType: 'json',
        data: this.get('score').script,
      };

      this.get('ajax').raw(url, options)
        .then(({ response }) => {
          this.set('imageUrl', response.image.url);
          this.set('progressText', '');
          this.set('errorText', '');
        })
        .catch(({ response, jqXHR }) => {
          this.set('progressText', 'an error occurred');
          this.set('errorText', jqXHR.responseJSON.detail);
        });
    }
  },

  keyboardShortcuts: {
    'ctrl+s' : 'engrave'
  }

});
