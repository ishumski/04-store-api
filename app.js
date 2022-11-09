const express = require('express')
const notFound = require('./middleware/notFound')
const errorHandlerMiddleware = require('./middleware/errorHandler')
require('dotenv').config()

const app = express()
const PORT = process.env.PORT || 5001

app.use(notFound)
app.use(errorHandlerMiddleware)

const start = ()=>{
    try{
        app.listen(PORT, () => console.log(`Server started on port ${PORT}...`))

    }catch (e) {
        console.log(e)
    }
}

start()



