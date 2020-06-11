(function(window){
	var hellospeaker={};
	var speakword="Hello";
	hellospeaker.speak=function(name){
		console.log(speakeword+""+name);
	}
	window.hellospeaker=hellospeaker;

})(window);