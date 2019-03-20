'use strict'

const express = require('express'),
      compression = require('compression'),
      app = express(),
      port = 3000

app
  .set('view engine', 'ejs')
  .set('views', 'views')

  .use(express.static('public'))
  .use(compression())

  .get('/', homePage)
  .get('/color', colorPage)
  .get('/text', textPage)
  .get('/print', printPage)

  .listen(port, () => console.log(`Example app listening on port ${port}!`))

function homePage(req, res) {
  res.render('pages/index.ejs')
}

function colorPage(req, res) {
  res.render('pages/color.ejs')
}

function textPage(req, res) {
  res.render('pages/text.ejs')
}

function printPage(req, res) {
  res.render('pages/print.ejs')
}
