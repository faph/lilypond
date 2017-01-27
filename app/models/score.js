import DS from 'ember-data';

export default DS.Model.extend({
  script: DS.attr(),
  imageUrl: DS.attr()
});
