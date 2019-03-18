# Continuous Integration & Meteor

[Check out the full write up here](https://medium.com/salted-bytes/continuous-integration-meteor-7acac66c9381?sk=cbe1a9eb8674121ba3890ff6ce09f44d)

  Basically, once you've hooked up the project to CircleCI and Heroku, you can:
    
    git commit -am 'bad commit'
    
Will output something like:

    /Users/chris/Sites/_My Projects/meteor-ci/imports/ui/layouts/body/body.js
    1:21 error Missing semicolon semi
    
    ✖ 1 problem (1 error, 0 warnings)
    1 error and 0 warnings potentially fixable with the `--fix` option.

Fix it up and commit the fix. If the tests pass & linting is good =>

    git push
    
After which, the CI runner starts, & your project will be deployed if build succeeds.

Again, check out the full write up (sorry for Medium link, will convert to GH markdown soon).
