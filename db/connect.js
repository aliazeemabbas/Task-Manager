const mongoose = require('mongoose')

const connectionString = 
'mongodb+srv://admin:Aaliyan1@task-manager.ps7dpzz.mongodb.net/Task-Manager?retryWrites=true&w=majority'

const connectDB = (url) => {
    return mongoose.connect(connectionString)
}

module.exports = connectDB
    