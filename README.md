# PokeBay: Pokemon Social Marketplace
### An App that helps Pokemon players connect with others to find the Pokemon that they are looking for.

## <p style="color: green;">Table of Contents</p>
- [Introduction](#introduction)
- [Software Requirements](#software-requirements)
- [Technologies used](#technologies-used)
- [How to install?](#how-to-install)
- [How to get started?](#how-to-get-started)

## <p style="color: green;">Introduction</p>
This App is my back-end capstone project for Nashville Software School. I built it to demonstrate my abilities to build a full stack application.

This app's main aim is to create an online marketplace for Pokemon players to meet and trade Pokemon that they could not get on their own.

Players will create a profile and then search the home page to see if anyone is willing to trade desired Pokemon. If so, players can make an offer their own Pokemon for the posted Pokemon. The original poster, will then be able to select which proposal they will accept and connect with that user. If a desired Pokemon is not already listed, then the player can offer one of their own Pokemon to trade in exchange for the Pokemon that player desires.

Players can only communicate with users whose trade request they accepted.

## <p style="color: green;">Software Requirements</p>

- [Node.js](https://nodejs.org/en/)
- [npm](https://www.npmjs.com/)
- [PostgreSQL](https://www.postgresql.org/)

## <p style="color: green;">Technologies used</p>

- [Express](https://expressjs.com)
- [jQuery](https://jquery.com/)
- [Sequelize-ORM](http://docs.sequelizejs.com/)
- [Materialize](http://materializecss.com/)
- [Passport js](http://www.passportjs.org/)
- [Pug](https://pugjs.org/api/getting-started.html)

## <p style="color: green;">How to Install?</p>

- Clone the project to the desired folder in your directory,
```git clone https://github.com/Arwask/Schedule-app```
- cd into the folder ```cd Schedule-app```
- run ```npm install``` at the root folder

## <p style="color: green;">How to get started?</p>

Create a Database named 'Pokebay'
- Once you have postgreSQL setup, type ```psql``` in your terminal
- Then, create a new database ```CREATE DATABASE 'Schedule-App';```
- And, connect to the Database ```\c 'Schedule-App'```

Once you are inside the project folder.
- Install all dependencies. Run ```npm install` at the root folder.
- Move Popper, jquery and popper into static/lib/ folder
- Next, go to config folder ``` cd config```
- Make a new file ```touch config.json ```
- Copy the contents from config.example.json and paste it into your config.json and change the username and password fields to your credentials.
- Create the tables and seed them with some starter data using ```npm run dbrb```
- Start the project using ```npm start```

## <p style="color: green;">Developer</p>

[Jevon Thomas](http://jevonthomas.com)

<p align="center">&copy; 2017 Jevon Thomas</p>
