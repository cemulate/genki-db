# Static Web App Stack

A minimal skeleton for a front-end-only web app.
`package.json` starts with all dependencies at version 0.0.0, so that you can run `npm-check-updates -u` to update everything to the latest version at the start of development.
Note that you must install this utility with `npm install -g npm-check-updates`

Generally, running `gulp` will compile and run the server, watching scripts and html for changes.
All source code can be written in ES6, as compilation runs the source through `babel`.
Running `gulp deploy` will compile the site into a `.publish` folder with its own git repo and will push it to a `gh-pages` branch of your current repo --- you can also use this push to a deployment server, if your host is configured to deploy via a `git push`.
