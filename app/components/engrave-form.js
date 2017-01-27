import Ember from 'ember';

export default Ember.Component.extend({
  ajax: Ember.inject.service(),
  imageUrl: '',
  statusText: '',
  actions: {
    engrave: function(event){
      this.set('statusText', 'In progress...');
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
          this.set('statusText', '');
        })
        .catch(({ response, jqXHR }) => {
          this.set('statusText', jqXHR.responseJSON.detail);
        });
    }
  }
});
