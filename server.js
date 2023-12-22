const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

const items = [
	{ id:1, name: 'Book 1'},
	{ id:2, name: 'Book 2'},
	{ id:3, name: 'Book 3'},
	{ id:4, name: 'Book 4'},
];

app.get('/api/items', (req, res) => {
	res.json(items);
});

app.post('/api/items', (req, res) => {
	const newItem = req.body;
	newItem.id = items.length + 1;
	item.push(newItem);
	res.json(newItem);
});

app.listen(PORT, () => {
	console.log('Server is running on http://localhost:${PORT}');
});