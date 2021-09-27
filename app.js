const mongoose = require('mongoose')
    
const DB_HOST = "mongodb+srv://sergey45:1234Azxcvbnm@cluster0.d8riu.mongodb.net/test"

mongoose.connect(DB_HOST, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

    .then(() => {
    console.log("Database connected success")
    })

    .catch(error => {
        console.log(error.message)
    })