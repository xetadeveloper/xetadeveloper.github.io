# Starting a Jekyll project with this setup

1.  Run

        jekyll new docs

    to create the jekyll project at the src folder.

2.  Then move the config.yml, Gemfile and Gemfile.lock to the project root.

3.  Paste into the config.yml file these settings

        #My custom settings
        source: docs
        destination: ./site
        exclude: ['node_modules']
        strict_front_matter: true
        port: 4000 | <Your Choice>

4.  In the terminal at the project root directory, run

         npm run app-dev

    to start up the two terminals for jekyll and webpack dev servers.

## Generated Folders

---

### web

This is the folder that webpack watches and builds from.

**Note:** By default the folder is cleaned before building, this can be changed in the webpack configuration files.

### src

This is where the Jekyll project is stored and this folder is watched by the Jekyll server which rebuilds the site on every webpack build.

### Batch Files for **Windows Users Only**

The batchfiles in this folder are created to open the two terminals at once and execute their specific commands.

- npm run jek-dev
- npm run wbp-dev-watch

These are npm scripts in the package.json. Feel free to modify them.

### Scripts

- To build the whole project, run

        npm run build-all

  this will clean the site folder, build the jekyll site again and then bundle the files to a dist folder which can then be used as the final site.

- To start the dev environment

      npm run app-dev

  this opens two terminals and runs the jekyll server and webpack dev server in each one.

- To push to github

      npm run push-site

  this initializes a git repo in the dist folder and commits all files, then pushes to the remote repository.
  
  **Note**: Edit the github repo link in the batch file to the correct repo link. 
  
  Also this method forces the push to the master repo so the master repo commits are always cleared, so you need to always push the dev env also to get a full commit history.

	  npm run push-dev

	this pushes all the folders and files in the root directory excluding the site, node_modules and the dist folder to a branch "devEnv" that will hold all the development files for the site.

## Project
This project is authored and maintaned by F. Etese.