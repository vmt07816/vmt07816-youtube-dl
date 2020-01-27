// var mp3Btn = document.getElementById('mp3');
var	mp4Btn = document.getElementById('mp4');
var	imgBtn = document.getElementById('image');
// var URLinput = document.querySelector('.URL-input');
var URLinput = document.getElementById('input_url');
// var server = '';

// mp3Btn.addEventListener('click', () => {
// 	console.log(`URL: ${URLinput.value}`);
// 	redirectMp3(URLinput.value);
// });


mp4Btn.addEventListener('click', () => {
	console.log(`URL: ${URLinput.value}`);
	redirectMp4(URLinput.value);
});
imgBtn.addEventListener('click', () => {
	console.log(`URL: ${URLinput.value}`);
	redirectImage(URLinput.value);
});
function redirectMp3(query) {
	window.location.href = `downloadmp3?url=${query}`;
}

function redirectMp4(query) {
	window.location.href = `downloadmp4?url=${query}`;
}
function redirectImage(query) {
	window.location.href = `downloadimg?url=${query}`;
}
