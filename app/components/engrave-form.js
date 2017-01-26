import Ember from 'ember';

export default Ember.Component.extend({
  ajax: Ember.inject.service(),
  imageUrl: '',
  actions: {
    engrave: function(event){
      $('body').addClass('wait');
      let url = 'https://lilypond-api.herokuapp.com/scores/';
      let options = {
        contentType: 'text/plain',
        dataType: 'json',
        data: this.get('score').script,
      };

      this.get('ajax').post(url, options)
        .then(response => {
          this.set('imageUrl', response.image.url);
          $('body').removeClass('wait');
        })
        .catch(({ response }) => {
          console.log(response);
          $('body').removeClass('wait');
        });
    }
  }
});
