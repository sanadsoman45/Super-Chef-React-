const dotenv = require("dotenv");
dotenv.config();

const express = require('express')
const expressProxy = require('express-http-proxy');


const app = express();
const morgan = require("morgan");
app.use(morgan('dev'))

const PORT = process.env.PORT || 3000;


app.use('/ingredients', expressProxy('http://localhost:3001'))


app.listen(PORT, () => {
    console.log(`Gateway server listening on port ${PORT}`);
})