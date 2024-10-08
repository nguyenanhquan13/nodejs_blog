const path = require('path');
const express = require('express');
const morgan = require('morgan');
const methodOverride = require('method-override')
const { engine } = require('express-handlebars');
const app = express();
const port = 3000;

const route = require('./routes');

const db = require('./config/db');

//connect to db
db.connect();

//Static file
app.use(express.static(path.join(__dirname, 'public')));

//Middleware xử lý dữ liệu từ form
app.use(
    express.urlencoded({
        extended: true,
    }),
);
app.use(express.json({ limit: 10 }));

// HTTP logger
app.use(morgan('combined'));

// method
app.use(methodOverride('_method'))

// Template engine
app.engine(
    'hbs',
    engine({
        extname: '.hbs',
        helpers: {
            sum: (a, b) => a + b,
        },
    }),
);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources', 'views'));

//Route init
route(app);

//localhost --- hosting

// Action --> Dispatcher --> functionHandler

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});
