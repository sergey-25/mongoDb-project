const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

const { DB_HOST } = process.env;


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

dotenv.config()