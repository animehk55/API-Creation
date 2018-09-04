import mongoose from 'mongoose'

const dbCredentials = 'sonagreen'

mongoose.connect(`mongodb://${dbCredentials}:${dbCredentials}@ds121960.mlab.com:21960/${dbCredentials}`)