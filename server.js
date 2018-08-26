const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());

const dbConfig = require('./config/database.config.js');
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

mongoose.connect(dbConfig.url, {
	useNewUrlParser: true
}).then(() => {
	console.log("Connected to database");
}).catch(err => {
	console.log('Error connecting to database');
	process.exit();
});

require('./routes/user.routes.js')(app);

app.listen(8000, () => {
	console.log("Server is listening on port 8000");
});
