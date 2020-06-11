(function(window){
	var names=["yaaakov","John","Jen","Jack","Paul","Fake","Lorry","Laisi","Jaya"];
	for(var i=0; i < names.length ; i++){
		var firstletter=name[i].charAt(0).tolowercase();
		if(firstletter=='j'){
			window.byespeaker.speak(name[i]);
		} else{
			window.hellospeaker.speak(name[i]);
		}
	}
})(window);