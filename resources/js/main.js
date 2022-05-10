// TODO - Add howler.js

const boxes = document.querySelectorAll('.box');

for (box of boxes) {
	box.addEventListener('click', (e) => {
		console.log(e.target.id);

		e.target.id === 'restSong'
			? playRestSong()
			: playNote(`.note${e.target.id}`);
	});
}
function playNote(noteId) {
	let note = document.querySelector(noteId);
	stopNote(note);
	note.play();
}

function playRestSong() {
	// document.querySelector('.rest-song').play();
	let video = document.querySelector('video');
	video.classList.remove('none');
	video.src = 'resources/video/Runaway_video_drop.mp4';
}

function stopNote(note) {
	note.pause();
	note.currentTime = 0;
}
