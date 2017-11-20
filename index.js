const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const Post = require('./src/models/posts');
const Subscriber = require('./src/models/subscribers');
require('dotenv').config();

mongoose.connect(process.env.DB_URL);


var SERVER = {
	app: express(),
	port: process.env.PORT || 3000,
	static: function(req, res) {
		console.log('dirname',__dirname);
		res.sendFile('/build/index.html');
	}
};



SERVER.app.use(function(req, res, next) {
 res.setHeader('Access-Control-Allow-Origin', '*');
 res.setHeader('Access-Control-Allow-Credentials', 'true');
 res.setHeader('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT,DELETE');
 res.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers');
 res.setHeader('Cache-Control', 'no-cache');
 next();
});



// Webserver
SERVER.app.use(express.static(path.join(__dirname, 'build')));
SERVER.app.use(bodyParser.urlencoded({ extended: true }));
SERVER.app.use(bodyParser.json());
SERVER.app.get('/', SERVER.static);

//adding the /comments route to our /api router
SERVER.app.get('/posts', function(req, res){
	Post.find(function(err, posts) {
		if(err) {
			res.send('error',err);
		}else {
			console.log(posts);
			res.send(posts);
		}
	})
})

SERVER.app.post('/posts', function(req, res){
	var post = new Post({
		imageURL: req.query.imageURL,
		title: req.query.title,
		teaser: req.query.teaser
	});
 post.save(function(err) {
	 if(err){
	 	res.send(err);
	 }else {
	 	 console.log('post added', post);
	 	 res.send(post);
	 }		 
 })
})

SERVER.app.post('/subscribe', function(req, res){
	var subscriber = new Subscriber({
		name: req.query.name,
		email: req.query.email
	});
 subscriber.save(function(err) {
	 if(err){
	 	res.send(err);
	 }else {
	 	 console.log('subscriber added', subscriber);
	 	 res.send(subscriber);
	 }		 
 })
})

 

// Start server
SERVER.app.listen(SERVER.port, () => {
	console.log(`Port ${SERVER.port} is lit fam 🔥 🔥 🔥`);
});
