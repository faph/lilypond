LilyPond Editor
===============

Web application to engrave or write musical scores using [LilyPond](http://lilypond.org).

Architecture
------------

1.  [Ember](http://emberjs.com) JavaScript web application running on 
    [GitHub Pages](https://pages.github.com).
2.  [Django Rest Framework](http://www.django-rest-framework.org) Python web API 
    running on [Heroku](https://heroku.com). Uses two buildpacks:

  	-   [Python/Conda](https://github.com/faph/conda-pip-buildpack)
  	-   [LilyPond](https://github.com/faph/heroku-buildpack-LilyPond/tree/fix-install-path)

Terms & Conditions
------------------

LilyPond Editor is licensed under the [GNU General Public License](LICENSE).
