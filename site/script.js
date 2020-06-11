(function(window){
	var names=["yaaakov","John","Jen","Jack","Paul","Fake","Lorry","Laisi","Jaya"];
	for (var i in names) {
		 var firstLetter = names[i].charAt(0).toLowerCase();
		if(firstletter=='j'){
			window.byespeaker.speak(names[i]);
		} else{
			window.hellospeaker.speak(names[i]);
		}
	}
})(window);