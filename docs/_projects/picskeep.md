---
layout: project
name: PicsKeep
link: picskeep.herokuapp.com
image: picskeep.png
repo: github.com/xetadeveloper/picskeep
description: A picture gallery app made with the MERN stack and AWS S3
title: PicsKeep Project
---

{:.header-text}
### About {{page.name}}

PicsKeep is a picture gallery app created to store pictures uploaded from any device with a browser. It makes use of AWS S3 to store the pictures and retreive them, also MongoDB for other non-binary data.

The App is fully responsive and displays properly over all devices. With PicsKeep you can create, edit and delete trades with ease as the user interface is easy to understand. It also enables you to download the pictures you upload.

{:.header-text}

### Technology Stack

<div class='flex justify-center align-center tech-stack'>
<img src='../assets/images/techIcons/mongodb.svg' alt='MongoDB' class='tech-icon' />
<img src='../assets/images/techIcons/expressjs.svg' alt='ExpressJS' class='tech-icon' />
<img src='../assets/images/techIcons/react-js.svg' alt='React' class='tech-icon' />
<img src='../assets/images/techIcons/s3Icon.svg' alt='AWS S3' class='tech-icon' />
</div>

{:.sub-header}

#### MongoDB

MongoDB NoSQL database is used to store the user's info and picture file names as is stored on S3, and the data is stored in the cloud using the MongoDB Atlas DBaaS platform, which employs cluster support as replica sets of the database to increase data redundancy and availability.

{:.sub-header}

#### ExpressJS

For the web server, ExpressJS was used to respond to requests from clients. The REST API was designed such that it can be accessed using any type of client e.g native mobile app, web browser etc.

Authentication was also added using session-based authentication means.

{:.sub-header}

#### React

For the client frontend on the browser, React was used to create an SPA to avoid always refreshing the page on route change.

Redux was also used for state management in the React App.

{:.sub-header}

#### AWS S3

For a more cost effective means of storing the pictures, AWS S3 was chosen.
