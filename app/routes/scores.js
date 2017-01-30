import Ember from 'ember';

let defaultScript = "\\new PianoStaff \\relative c' <<\n  \\new Staff {\n    \\key f \\major\n    \\clef treble\n    R4*4\n    R4*4\n    R4*4\n    R4*4 \\bar \"||\"\n  }\n  \\new Staff {\n    \\key f \\major\n    \\clef bass\n    g,8 bes d g ~g g f d\n    g,8 bes d g ~g g f d\n    g,8 bes d g ~g g f d\n    g,8 bes d g ~g g f d \\bar \"||\"\n  }\n>>\n\n\\paper {\n  indent = 0\\mm\n  oddFooterMarkup = ##f\n}";

export default Ember.Route.extend({
	model() {
    let store = this.get('store');

    return store.findAll('score').then(function(scores) {
      if (scores.get('length') > 0) {
        return scores.objectAt(0);
      } else {
        return store.createRecord('score', {
          script: defaultScript,
          imageUrl: ''
        });
      }
    });
  }
});
