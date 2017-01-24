import Ember from 'ember';

let score = {
  "script": "\\score {\n  \\new Staff \\relative c' {\n    \\set Score.currentBarNumber = 216\n    \\bar \"\"  % make first bar number be shown\n    \\clef bass \\key d \\minor \\time 3/4\n    \\tempo \"Recitativo\"\n    \\autoBeamOff\n    r4^\\markup { \\small Baritono } r a\n    \\appoggiatura a8 e'2. ~\n    e4 d8[ cis d e]\n    e4 g, r8 g\n    bes2 a8 e\n    g4 f r\n    R2.*2\n    gis2 gis4\n    r4 d'4. b8\n    b4 gis8([ a b cis]\n    e8[ d cis d)] b([ gis)]\n    e8 d d4 fis8([ e)]\n    d4 cis r\n    \\key d \\major\n    r4 r a'\n    d4.( e8[ fis e)]\n    e([ d)] d([ cis d a)]\n    g8([ fis)] fis([ e d c)]\n    c8([ b)] g'2~\n    \\once \\override Script.outside-staff-priority = #1\n    g4.\\fermata ^\\markup { \\small \\italic \"ad libitum\" } e8[ cis!] d\n    d8 a a4 r \\bar \"||\"\n  }\n  \\addlyrics {\n    O Freun -- _ _ de, nicht die -- _ se Tö -- ne!\n    Son -- dern laßt uns an -- _ ge -- neh -- me -- re an -- stim -- men,\n    und freu -- _ _ _ _ _ _ _ den -- vol -- le -- re!\n    % Freu -- de, Freu -- de,__\n  }\n}\n\n\\paper {\n  indent = 0\\mm\n  line-width = 160\\mm\n}"
};

export default Ember.Route.extend({
	model() {
    return score;
  }
});
