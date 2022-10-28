// import { createServer } from 'http';
const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
	if (req.url === '/') {
		let filepath = path.join(__dirname, 'public', 'home.html');
		fs.readFile(filepath, 'utf-8', (err, data) => {
			res.writeHead(200, 'Success', { 'Content-Type': 'text/html' });
			res.end(data);
		});
	}

	//redirecting /home to homepage
	if (req.url === '/home') {
		res.writeHead(302, {
			Location: '/',
			'Content-Type': 'text/html',
		});
		res.end();
	}

	if (req.url === '/contact') {
		let filepath = path.join(__dirname, 'public', 'contact.html');
		fs.readFile(filepath, 'utf-8', (err, data) => {
			res.writeHead(200, 'Success', { 'Content-Type': 'text/html' });
			res.end(data);
		});
	}
	if (req.url === '/about') {
		let filepath = path.join(__dirname, 'public', 'about.html');
		fs.readFile(filepath, 'utf-8', (err, data) => {
			res.writeHead(200, 'Success', { 'Content-Type': 'text/html' });
			res.end(data);
		});
	}
});

server.listen(2500, 'localhost', () => {
	console.log('Server is listening on port');
});
