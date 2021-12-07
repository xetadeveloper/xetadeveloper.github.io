---
layout: project
name: ChatStill
link: chatstill.herokuapp.com
image: chatstill.png
repo: github.com/xetadeveloper/chatstill
description: A chat application made with Socket.io
title: ChatStill Project
---

{:.header-text}

### About {{page.name}}

ChatStill is a chat application made with the use of Socket.io websocket and HTTP long-polling features.

The App is fully responsive and displays properly over all devices. With ChatStill you can create an account with a username only (for now, authentication is yet to be added), and chat with other users of the application, both private and group chats. It makes use of MongoDB to store the chat history of users.

{:.header-text}

### Technology Stack

<div class='flex justify-center align-center tech-stack'>
<img src='../assets/images/techIcons/mongodb.svg' alt='MongoDB' class='tech-icon' />
<img src='../assets/images/techIcons/expressjs.svg' alt='ExpressJS' class='tech-icon' />
</div>

{:.sub-header}

#### MongoDB

MongoDB NoSQL database is used to store the user's info and chat history and the data is stored in the cloud using the MongoDB Atlas DBaaS platform, which employs cluster support as replica sets of the database to increase data redundancy and availability.

{:.sub-header}

#### ExpressJS

For the web server, ExpressJS was used to respond to requests from clients and also in conjunction with Socket.io websocket implementation to send and receive messages in realtime between chat parties.

Authentication has not yet been added to this project, but it will be in the nearest future.

{:.sub-header}

#### HTML5, CSS3, JS

For the client frontend on the browser, HTML5, CSS3 and vanilla js was used to create the frontend.

Redux was also used for state management in the React App.
