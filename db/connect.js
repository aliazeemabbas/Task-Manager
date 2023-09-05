const mongoose = require('mongoose')

const connectionString = 
'mongodb+srv://admin:Aaliyan1@task-manager.ps7dpzz.mongodb.net/Task-Manager?retryWrites=true&w=majority'

mongoose
    .connect(connectionString)
    .then(() => console.log('Connected to DB'))
    .catch((err) => console.log(err))