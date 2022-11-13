/**
 * author: Refaat
 * this module is the startin point of the application
 */

// setup
const loader = require('./utility/loader');
const express = require('express');
const app = express();

// initalize the web application
loader.load(app);

// hello, world 👋
app.get('/', async (request, response) => {
    response.json({
        msg: 'hello, world 👋',
    });
});

// open port
app.listen(process.env.PORT || 3000, () => {
    console.log(`listening @ http://localhost:${process.env.PORT || 3000}`);
});