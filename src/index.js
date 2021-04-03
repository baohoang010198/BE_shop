const express = require('express');
const app = express();
const port = 3000;
const handlebars = require('express-handlebars');
const path = require('path');
const route = require('./routes/index');
const db = require('./config/db');

//connect db
db.connect();
//templates engine
app.engine(
  'hbs', 
  handlebars({
    extname: '.hbs',
    helpers: {
        sum: (a, b) => a + b,
    },
  }),
);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources', 'views'));

//setup css
app.use(express.static(path.join(__dirname,'public')));

//route setup
route(app)

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});