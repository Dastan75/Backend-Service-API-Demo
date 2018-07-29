# Backend Service - Coding challenge?

Creation of a strong, reliable API with good architecture.

Need to be easy to learn and to update.

Use of the framwork [Sails](http://sailsjs.org)
  * ORM for databases
  * Good separation between Model, View and Controller 
  * Easy security configuration with policies
  * Default CRUD but can be overwrited

Use of docker to deploy app easy and a scalable solution.

Run by docker-compose with prod and dev versions.

Use of Git-Flow

This API has a very easy security system use in the polices to remove or add permissions.

Requirements
------

  * Docker + Docker-Compose
  * Nodejs

Optional
------

  * [Portainer](https://portainer.io/) for logs and monitoring

Running
------

* DEV:
  * BUILD: npm run rebuild-dev
  * RUN: npm start (run the app without docker: cd server && sails lift)
  
* PROD:
  * BUILD: npm run rebuild-prod
  * RUN: npm run start-prod

Architecture
------

CRUD for every models
  * Can user parameters to return data, ex: GET /news?promote=true
  * Work with: skip, limit, sort

Security:
  * Token is required for some:
      * Format: Authorization: Bearer <token>
  * Can be change in the policies.js file
  * Default values is set in the bootstrap.js file with a default admin
  * Can be desactivated in the custom.js file (no token / unlimited access)
  * Can activate default password and set his value in custom.js
  * Auth controller to return basic data about user with token

LOGS:
  * log file logfile.log can be changed in log.js

DATABASE:
  * Build with mongoDB in a docker
  * development.js datastores default can change database for dev env
  * production.js datastores default can change database for prod env

CRON:
  * cron.js simulate SMS as been received

To do
------

Make a interface with React to manage the profiles and routes.

Use Redis.

My link
------

[Linkedin](https://fr.linkedin.com/in/florianbadier/en)