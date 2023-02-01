const express = require('express')
const bodyParser = require('body-parser')

const routes = require('./src/routes')
const app = express()
const port = 3000

app.use(bodyParser.json())

app.use('tracks', routes.tracks)
