---
layout: project
name: JournalMe
link: journalme.herokuapp.com
image: journalme.png
description: A trading journal app made with the MERN stack
title: JournalMe Project
---

{:.header-text}
### About {{page.name}}

JournalMe is a trading journal app I created to help traders monitor their trading performance. It has charts which display a trader's progress over time, which were implemented using Charts.js library.

The App is fully responsive and displays properly over all devices. With JournalMe you can create, edit and delete trades with ease as the user interface is easy to understand.

{:.header-text}

### Technology Stack

<div class='flex justify-center align-center tech-stack'>
<img src='../assets/images/techIcons/mongodb.svg' alt='MongoDB' class='tech-icon' />
<img src='../assets/images/techIcons/expressjs.svg' alt='ExpressJS' class='tech-icon' />
<img src='../assets/images/techIcons/react-js.svg' alt='React' class='tech-icon' />
</div>

{:.sub-header}

#### MongoDB

MongoDB NoSQL database is used to store the trader's data on user info and trades info, and the data is stored in the cloud using the MongoDB Atlas DBaaS platform, which employs cluster support as replica sets of the database to increase data redundancy and availability.

{:.sub-header}

#### ExpressJS

For the web server, ExpressJS was used to respond to requests from clients. The REST API was designed such that it can be accessed using any type of client e.g native mobile app, web browser etc.

Authentication was also added using session-based authentication means.

{:.sub-header}

#### React

For the client frontend on the browser, React was used to create an SPA to avoid always refreshing the page on route change.

Redux was also used for state management in the React App.
