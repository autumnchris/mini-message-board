const express = require('express');
const bodyParser = require('body-parser');
const indexRouter = require('./routes/index');
const apiRouter = require('./routes/api');

const app = express();
const port = process.env.PORT || 3000;

app.set('views', `${__dirname}/views`);
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: false}));

app.use(express.static(`${__dirname}/public`));

app.use('/', indexRouter);
app.use('/api', apiRouter.router);

app.use((req, res, next) => {
    res.status(404).render('404', {title: 'Page not found', mainHeading: '404: Page not found'});
});

app.listen(port, console.log(`Server is listening at port ${port}.`));

module.exports = app;
