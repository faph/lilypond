import Ember from 'ember';

let score = {
  "image": {
      "url": "http://lilypond-api.herokuapp.com/media/scores/3231d59e-6d9f-4bf5-9bd1-36556b7ee58e.png"
  },
  "script": "\\relative c' {\n  \\key g \\major\n  \\time 6/8\n  d4 b8 c4 a8 | d4 b8 g4\n}"
};

export default Ember.Route.extend({
	model() {
    return score;
  }
});
