const express = require('express');
const cors = require('cors');
const ytdl = require('ytdl-core');
const fs = require('fs');
const youtubedl = require('youtube-dl');
const path = require('path');
const app = express();
const http = require('http');
const port = process.env.PORT || 3000;

var file_name;

app.use(cors());
app.use(express.static(__dirname + '/public'));

app.listen(port, () => console.log(`Server Works !!! At port ${port}!`));

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});
app.get('/downloadmp3', (req,res) => {
	var url = req.query.url;
	file_name = 'audio';
	
	ytdl.getInfo(url, (err, info) => {
	  if (err) throw err;
	  console.log('title:', info.title);
	  console.log('rating:', info.avg_rating);
	  console.log('uploaded by:', info.author.name);
	  res.header('Content-Disposition', `attachment; filename="${info.title.substring(0,30)}.mp3"`);
	});

	//res.header('Content-Disposition', `attachment; filename="${file_name}.mp3"`);
	ytdl(url, {
		format: 'mp3',
		filter: 'audioonly'
	}).pipe(res);
});
 app.get('/downloadimage', (req,res) => {

	const file = fs.createWriteStream("file.jpg");
	const request = http.get("http://i3.ytimg.com/vi/J---aiyznGQ/mqdefault.jpg", function(response) {
	  response.pipe(file);
	});
 });

app.get('/downloadmp4', (req,res) => {
	var url = req.query.url;
	file_name = 'video';
	
	ytdl.getInfo(url, (err, info) => {
	  if (err) throw err;
	  console.log('title:', info.title);
	  console.log('rating:', info.avg_rating);
	  console.log('uploaded by:', info.author.name);

	  res.header('Content-Disposition', `attachment; filename="${info.title.substring(0,30)}.mp4"`);
	});

	// res.header('Content-Disposition', 'attachment; filename="video.mp4"');
	
	ytdl(url, {
		format: 'mp4'
	}).pipe(res);
});
