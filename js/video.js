var video=document.querySelector("video");

// element_to_listen_to.addEventListener(event_type)
// event_types are click, load, mouseover, change


window.addEventListener("load", function() {
	console.log("Good job opening the window")

});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play()
});

document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause()
});

document.querySelector("#slower").addEventListener("click", function() {
	console.log("slow down Video");

	video.playbackRate *= 0.95;
	console.log(video.playbackRate)

});

document.querySelector("#faster").addEventListener("click", function() {
	console.log("Speed Up Video");

	video.playbackRate /= 0.95;
	console.log(video.playbackRate)
});

document.querySelector("#skip").addEventListener("click", function() {
	console.log("skip");
	console.log(video.currentTime)
	video.currentTime += 15;
	console.log(video.currentTime)
});


// var video = document.getElementById("myVideo");
// video.onpause = function() {
// 	console.log("The video has been paused");
// };


// var vid = document.getElementById("myVideo");
// vid.volume = 0.2;

document.querySelector("#slider").addEventListener("change", function() {
	console.log("slider");
	console.log(this.value)
	video.volume = this.value / 100
});


document.querySelector("#mute").addEventListener("click", function() {
	console.log("Muted");
	console.log(video.muted);
	if (video.muted == false){
		video.muted = true
		this.innerHTML = "Unmuted"}
	else{
		video.muted = false
		this.innerHTML = "Muted"
	}
});

