# Continuous Integration & Meteor

[Check out the full write up here](https://medium.com/salted-bytes/continuous-integration-meteor-7acac66c9381?sk=cbe1a9eb8674121ba3890ff6ce09f44d)

  Basically, once you've hooked up the project to CircleCI and Heroku, you can:
    
    chris @ ~/Sites/_My Projects/meteor-ci * master
    [1] → git commit -am 'bad commit'
    
    /Users/chris/Sites/_My Projects/meteor-ci/imports/ui/layouts/body/body.js
    1:21 error Missing semicolon semi
    
    ✖ 1 problem (1 error, 0 warnings)
    1 error and 0 warnings potentially fixable with the `--fix` option.
    
    // if test pass & linting is good =>
    git push
    
    // CI runner starts, deployed if build succeeds
