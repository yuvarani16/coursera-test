(function(window){
	var names=["yaaakov","John","Jen","Jack","Paul","Fake","Lorry","Laisi","Jaya"];
	for (var i in names) {
		 var firstLetter = names[i].charAt(0).toLowerCase();
		 if (firstLetter == 'j') {
     window.byeSpeaker.speak(names[i]);
  } else {
     window.helloSpeaker.speak(names[i]);
  }
}
})(window);
