import Ember from 'ember';

export default Ember.Component.extend({
  ajax: Ember.inject.service(),
  imageUrl: null,
  actions: {
    engrave: function(event){
      Ember.$('body').addClass('wait');
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
          Ember.$('body').removeClass('wait');
        })
        .catch(({ response, jqXHR }) => {
          console.log(response);
          console.log(jqXHR);
          Ember.$('body').removeClass('wait');
        });
    }
  }
});
