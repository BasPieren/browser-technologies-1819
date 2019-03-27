'use strict'

const express = require('express'),
      compression = require('compression'),
      fs = require('fs'),
      bodyParser = require('body-parser'),
      app = express(),
      port = 4000

app
  .set('view engine', 'ejs')
  .set('views', 'views')

  .use(express.static('public'))
  .use(bodyParser.urlencoded({ extended: false }))
  .use(compression())

  .get('/', homePage)
  .get('/color', colorPage)
  .get('/text', textPage)

  .post('/print', printPage)
  .post('/text', textPage)

  .listen(port, () => console.log(`Example app listening on port ${port}!`))

function homePage(req, res) {
  res.render('pages/index.ejs')
}

function colorPage(req, res) {
  res.render('pages/color.ejs')
}

function textPage(req, res) {
  const color = req.body.kleur;

  res.render('pages/text.ejs', {color: color})
}

function printPage(req, res) {
  const shirtProps = req.body;

  res.render('pages/print.ejs', {tshirt: shirtProps})
}
