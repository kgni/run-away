document.querySelector('.box1').addEventListener('click', playNote1);
document.querySelector('.box2').addEventListener('click', playNote2);
document.querySelector('.box3').addEventListener('click', playNote3);
document.querySelector('.box4').addEventListener('click', playNote8);
document.querySelector('.box5').addEventListener('click', playRestSong);
document.querySelector('.box6').addEventListener('click', playNote4);
document.querySelector('.box7').addEventListener('click', playNote7);
document.querySelector('.box8').addEventListener('click', playNote6);
document.querySelector('.box9').addEventListener('click', playNote5);

function playNote1() {
	let note = document.querySelector('.note1');
	stopNote(note);
	note.play();
}
function playNote2() {
	let note = document.querySelector('.note2');
	stopNote(note);
	note.play();
}
function playNote3() {
	let note = document.querySelector('.note3');
	stopNote(note);
	note.play();
}
function playNote4() {
	let note = document.querySelector('.note4');
	stopNote(note);
	note.play();
}
function playNote5() {
	let note = document.querySelector('.note5');
	stopNote(note);
	note.play();
}
function playNote6() {
	let note = document.querySelector('.note6');
	stopNote(note);
	note.play();
}
function playNote7() {
	let note = document.querySelector('.note7');
	stopNote(note);
	note.play();
}
function playNote8() {
	let note = document.querySelector('.note8');
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
