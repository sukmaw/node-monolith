const express = require('express')
const path = require('path')

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, "src", "views"))

app.use(express.urlencoded({extended: false}))

app.use('/', require('./src/routers'))

const PORT = process.env.PORT || 3000;
app.listen(PORT, ()=>{
    console.log('Server is running try auto deployment')
    console.log(`App listen on port ${PORT}`)
});