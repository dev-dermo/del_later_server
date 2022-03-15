require('dotenv').config();
const express = require('express');

const app = express();

const PORT = process.env.PORT || 3001;

app.get('/', (req, res) => {
	res.send(`Hello my name is ${process.env.NAME}.`);
});

app.listen(PORT, () => {
	console.log(`App up and running at ${PORT}`);
});