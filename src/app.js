import express from 'express'
import mongoose from 'mongoose'
import bodyParser from 'body-parser'

import setupAPI from '../src/rest/routes'

const app = express()

const dbCredentials = 'sonagreen'

mongoose.connect(`mongodb://${dbCredentials}:${dbCredentials}@ds121960.mlab.com:21960/${dbCredentials}`)
app.use(bodyParser.json())

// Setup REST APIs
setupAPI(app)

app.listen(8080,() => {
    console.log(`The Sona Green server has started on port:8080`)
})