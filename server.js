const express = require('express');
const webpack = require('webpack');
const bodyParser = require('body-parser');
const config = require('./webpack.config');
const indexRouter = require('./routes/index');
const apiRouter = require('./routes/api');

const app = express();
const compiler = webpack(config);
const port = process.env.PORT || 3000;

app.set('views', `${__dirname}/views`);
app.set('view engine', 'ejs');

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));

app.use(require('webpack-hot-middleware')(compiler));

app.use(bodyParser.urlencoded({extended: false}));

app.use(express.static(`${__dirname}/public`));

app.use('/', indexRouter);
app.use('/api', apiRouter.router);

app.use((req, res, next) => {
    res.status(404).render('404', {title: 'Page not found', mainHeading: '404: Page not found'});
});

app.listen(port, console.log(`Server is listening at port ${port}.`));

module.exports = app;
