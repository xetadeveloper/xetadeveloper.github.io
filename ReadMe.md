# Starting a Jekyll project with this setup

1.  Run npm jek-create to create the jekyll project at the src folder.

2.  Then move the config.yml, Gemfile and Gemfile.lock to the project root.

3.  Paste into the config.yml file these settings

        #My custom settings
        source: src
        destination: ./src/\_site
        exclude: ['node_modules']
        strict_front_matter: true
        port: 5000 | <Your Choice>


4.  In the terminal at the project root directory, run

        npm run app-dev

    to start up the two terminals for jekyll and webpack dev servers.

## Configurations

---

### Webpack Configuration

Talk about webpack configuration

### Jekyll Configuration

Talk about jekyll configuration in the config.yml file

## Generated Folders

---

### web

This is the folder that webpack watches and builds from.

**Note:** By default the folder is cleaned before building, this can be changed in the webpack configuration files.

### src

This is where the Jekyll project is stored and this folder is watched by the Jekyll server which rebuilds the site on every webpack build.

### batchFiles

The batchfiles in this folder are created to open the three terminals at once and execute their specific commands.

- npm run jek-dev
- npm run wbp-dev-watch

These are npm scripts in the package.json. Feel free to modify them.

## Gitignore File

Explain things that were ignored in the .gitignore file

**Note** You can also use liveServer in vsCode to run the website from the jekyll \_site folder to view realtime changes
