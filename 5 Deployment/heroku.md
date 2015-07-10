Heroku Details
=================

For the most up to date instructions on launching a Heroku server head on over to [there site](https://devcenter.heroku.com/articles/getting-started-with-nodejs).

- In your server deployment create a `Procfile` with cmd for launching your service or services.
	- this could be a simple `node server.js` or it could launch a routine, maybe `nodemon server.js` or `gulp`.
	- ex. `web: node server.js`
- Download and install the [Heroku Tool Belt](https://devcenter.heroku.com/articles/getting-started-with-nodejs#set-up)
- With your Heroku account info, login `heroku login` and follow the prompts.
- The easiest and best way to deploy and manage a heroku deployment is with git. It is possible to svn, but we will not be covering that.
- In your local git repo enter `heroku create` This spawns a server instance and add heroku to your remotes in the repo.
- Next Step is to `git push heroku master` or what ever your branch is called that you want to deploy.

- Heroku recommends making sure your app is running by using their scaling command `heroku ps:scale web=1`
- Then open the site with `heroku open`

Logs `heroku logs --tail`  and `Control+C` to stop watching the logs.

Heroku recognizes an app by the app's `package.json` file which is typically create when starting an app and using the `npm init` command.

Heroku also likes using Foreman for management. `npm install -g foreman`
 - `foreman start web` to launch locally.
 - Heroku tool belt might install this foreman as well.