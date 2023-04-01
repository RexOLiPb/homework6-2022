

const video = document.querySelector("#player1");

video.autoplay = false

const slider = document.querySelector("#slider")

const muteButton = document.getElementById('mute');

const volumeText = document.querySelector("#volume");

window.addEventListener("load", function () {
	console.log("Good job opening the window")
	video.autoplay = false
	video.loop = false
	window.location = "video.html"

});

document.querySelector("#play").addEventListener("click", () => {
	console.log("Play Video volume", video.volume);
	video.play();
	volumeText.textContent = `${Math.round(video.volume * 100)}%`;

});

document.querySelector("#pause").addEventListener('click', () => {
	video.pause();

})

document.querySelector("#slower").addEventListener('click', () => {
	video.playbackRate -= 0.05;
	console.log(`Current playback rate is slow down : ${Math.round(video.playbackRate * 100)} %`);

})

document.querySelector("#faster").addEventListener('click', () => {
	video.playbackRate += 0.05;
	console.log(`Current playback rate is seed up : ${Math.round(video.playbackRate * 100)} %`);

})

document.querySelector("#skip").addEventListener('click', () => {
	let newTime = video.currentTime + 15;

	if (newTime > video.duration) {
		newTime = 0;
	}
	video.currentTime = newTime;

	console.log(`Video jump forwarded 15s, currently at ${Math.round(newTime)}s `);

})

muteButton.addEventListener('click', () => {
	

	video.muted = !video.muted;

	muteButton.textContent = video.muted ? 'Unmute' : 'Mute';

	console.log('mute?: ', video.muted)

})

document.querySelector("#vintage").addEventListener('click', () => {
	video.classList.add('oldSchool')

})

document.querySelector("#orig").addEventListener('click', () => {
	video.classList.remove('oldSchool')
})

slider.addEventListener('input', () => {

	video.volume = slider.value/100;

	volumeText.textContent = `${Math.round(video.volume * 100)}%`;

})

