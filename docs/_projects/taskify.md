---
layout: project
name: TaskifyApp
link: taskifyapp.herokuapp.com
image: taskifyApp.png
description: A to-do list app made with the MERN stack
title: Taskify Project
---

{:.header-text}
### About {{page.name}}

Taskify is a to-do list app that can be used over the internet in a browser, hosted on Heroku. It records tasks which the user creates and allows for categorization of these tasks for better organization to boost productivity.

It offers the full CRUD functionality of an application, where tasks can be created, updated and deleted. Organization of tasks into categories is also encouraged.

{:.header-text}
### Technology Stack

<div class='flex justify-center align-center tech-stack'>
<img src='../assets/images/techIcons/mongodb.svg' alt='MongoDB' class='tech-icon' />
<img src='../assets/images/techIcons/expressjs.svg' alt='ExpressJS' class='tech-icon' />
<img src='../assets/images/techIcons/react-js.svg' alt='React' class='tech-icon' />
</div>

{:.sub-header}
#### MongoDB

MongoDB NoSQL database is used to store the tasks, and the data is stored in the cloud using the MongoDB Atlas DBaaS platform, which employs cluster support as replica sets of the database to increase data redundancy and availability.

{:.sub-header}
#### ExpressJS

For the web server, ExpressJS was used to respond to requests from clients. The REST API was designed such that it can be accessed using any type of client e.g native mobile app, web browser etc.

Authentication was also added using session-based authentication means.

{:.sub-header}
#### React

For the client frontend on the browser, React was used to create an SPA to avoid always refreshing the page on route change.

Redux was also used for state management in the React App.
