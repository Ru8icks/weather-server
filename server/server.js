const express = require('express');
const bodyParser = require('body-parser');
const http = require('http');
const mongoose = require('mongoose');
const dbConfig = require('./config/database.config');
const routes = require('./routes/base.route');
const path = require('path');

const root = '../';
const app = express();
const cors = require('cors')

var corsOptions = {
  origin: 'http://localhost:4200',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204 
}

app.use(cors(corsOptions))

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(path.join(root, 'dist/fatralph')));
console.log(routes)

app.use('/api', routes);


mongoose.connect(dbConfig.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  
}).then(() => {
    console.log("Successfully connected to the database");
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
});

const port = process.env.PORT || '8000';
app.set('port', port);

const server = http.createServer(app);

server.listen(port, function () {
    console.info(`Server is up and running on port ${port}`)
});