const express = require('express');
const app = express();

const cookieSession = require("cookie-session");
const passport = require("passport");
require("./auth/passport");

// parse data
app.use(express.json());

// cors
const cors = require('cors');
app.use(cors({ origin: "http://localhost:3000", credentials: true }))

//sequelize 
const { sequelize } = require('./models/index.js');

// static file
const path = require('path');
const publicPathDirectory = path.join(__dirname, './public');
app.use(express.static(publicPathDirectory));

app.use(
    cookieSession({
        maxAge: 24 * 60 * 60 * 1000,
        keys: ['quean001'],
    })
);

app.use(passport.initialize());
app.use(passport.session());

// router
const { rootRouter } = require('./routers/index.js')
app.use('/api/v1/', rootRouter)

// listen connection event
const port = 4000;
app.listen(port, async () => {
    console.log(`App listening on http://localhost:${port}`);
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
});