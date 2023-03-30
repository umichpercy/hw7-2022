var video=document.querySelector("video");

// element_to_listen_to.addEventListener(event_type)
// event_types are click, load, mouseover, change


window.addEventListener("load", function() {
	console.log("Good job opening the window")

});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play()
	console.log(video.volume)
	document.querySelector("#volume").innerHTML = video.volume * 100 + "%"

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

	if((video.currentTime + 15) < video.duration){
		video.currentTime += 15;
	}
	else{
		video.currentTime = 0
	};
	console.log(video.currentTime)
});


document.querySelector("#pause").addEventListener("click", function() {
	console.log("pause");
	console.log(this.value)
});

document.querySelector("#slider").addEventListener("change", function() {
	console.log("slider");
	console.log(this.value)
	video.volume = this.value / 100
	document.querySelector("#volume").innerHTML = video.volume * 100 + "%"
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


document.querySelector("#vintage").addEventListener("click", function() {
	console.log("vintage");
	video.setAttribute("class", "oldSchool");
});

document.querySelector("#orig").addEventListener("click", function() {
	console.log("orig");
	video.removeAttribute("class");
});