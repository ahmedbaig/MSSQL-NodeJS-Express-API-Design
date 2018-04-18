const bodyParser = require('body-parser');
const express = require('express');
const cors = require('cors');
const fs = require('fs');
const historyApiFallback = require('connect-history-api-fallback');

const sql = require('mssql');

const path = require('path');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const webpackConfig = require('../webpack.config');

const isDev = process.env.NODE_ENV !== 'production';
const port  = process.env.PORT || 3017;


// Configuration
// ================================================================================================


//Function to connect to database and execute query

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(cors());

const config = {
  user: 'sa',
  password: '$-iOsApple',
  server: 'localhost',
  database: 'Cinepax'
};


// API routes
app.get('/api/moviesFetch/', cors(), (req, res) => {
  var conn = new sql.Connection(config);
  conn.connect()
  .then(function(){
    var req = new sql.Request(conn);
    req.query('SELECT * FROM MOVIES')
    .then(function(recordSet){
      return res.send(recordSet);
    }).catch(function(err){
      console.log(err);
    })
  });
});
app.get('/api/showtimeFetch/', cors(), (req, res) => {
  var conn = new sql.Connection(config);
  conn.connect()
  .then(function(){
    var req = new sql.Request(conn);
    req.query('SELECT * FROM SHOWTIME INNER JOIN MOVIES M ON M.MOVIEID = SHOWTIME.MOVIEID')
    .then(function(recordSet){
      return res.send(recordSet);
    }).catch(function(err){
      console.log(err);
    })
  });
});
app.get('/api/cinemaFetch/', cors(), (req, res) => {
  var conn = new sql.Connection(config);
  conn.connect()
  .then(function(){
    var req = new sql.Request(conn);
    req.query('SELECT * FROM CINEMA INNER JOIN CINEMATIMINGS C ON CINEMA.SCREENNUMBER = C.SCREENNUMBER')
    .then(function(recordSet){
      return res.send(recordSet);
    }).catch(function(err){
      console.log(err);
    })
  });
});

app.get('/api/seatsFetch/', cors(), (req, res) => {
  
  var conn = new sql.Connection(config);
  conn.connect()
  .then(function(){
    var req = new sql.Request(conn);
    req.query('SELECT * FROM GOLDCATEGORY INNER JOIN SEATCATEGORY S ON GOLDCATEGORY.SEATNUMBER = S.SEATNUMBER INNER JOIN SEATCATEGORYMIXES S2 ON S.SEATNUMBER = S2.SEATNUMBER')
    .then(function(recordSet){
      return res.send(recordSet);
    }).catch(function(err){
      console.log(err);
    })
  });
});


if (isDev) {
  const compiler = webpack(webpackConfig);

  app.use(historyApiFallback({
    verbose: false
  }));

  app.use(webpackDevMiddleware(compiler, {
    publicPath: webpackConfig.output.publicPath,
    contentBase: path.resolve(__dirname, '../client/public'),
    stats: {
      colors: true,
      hash: false,
      timings: true,
      chunks: false,
      chunkModules: false,
      modules: false
    }
  }));
  
  app.use(webpackHotMiddleware(compiler));
  app.use(express.static(path.resolve(__dirname, '../dist')));
} else {
  app.use(express.static(path.resolve(__dirname, '../dist')));
  app.get('*', function (req, res) {
    res.sendFile(path.resolve(__dirname, '../dist/index.html'));
    res.end();
  });
}

app.listen(port, '0.0.0.0', (err) => {
  if (err) {
    console.log(err);
  }
  console.info('CORS enabled web server running at port ', port);
  console.info('>>> 🌎 Open http://0.0.0.0:%s/ in your browser.', port);
});

module.exports = app;
