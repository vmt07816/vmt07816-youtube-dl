var	mp4Btn = document.getElementById('mp4');
var	imgBtn = document.getElementById('image');

var URLinput = document.getElementById('input_url');

mp4Btn.addEventListener('click', () => {
	console.log(`URL: ${URLinput.value}`);
	redirectMp4(URLinput.value);
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
