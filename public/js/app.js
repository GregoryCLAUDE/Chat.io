var socket=io();
var username;
var usernameInput=$(".usernameInput");
var loginPage =$(".loginPage");
var windows =$(windows);
var currentInput = usernameInput.focus();

$(function () {
    var socket = io();
    $('form').submit(function(){
      socket.emit('chat message', $('#m').val());
      $('#m').val('')
      return false;
    });
  });

$(function (){
	var socket=io();
	$("form").submit(function(){
		socket.emit("chat message", $("#m").val());
		$("#m").val("")
		return false
	});
	socket.on("chat message", function(msg){
		$("#messages").append($("<li>").text(msg));
	});
});

$(function(){
	var FADE_TIME =150;
	var TYPING_TIMER_LENGTH= 400;
	var COLORS = [
		 '#e21400', '#91580f', '#f8a700', '#f78b00',
    	'#58dc00', '#287b00', '#a8f07a', '#4ae8c4',
    	'#3b88eb', '#3824aa', '#a700ff', '#d300e7'
	]
})

// enregistre le nom d'utilisateur 

function setUsername(){
	username = cleanInput(usernameInput.val().trim())

	socket.emit("add user", username);
};

// evenements liés a l'utilisation du clavier

windows.keydown(function(event){

	// positionne le focus du clavier sur l'input
	if(!(event.ctrKey || event.metaKey ||even.altKey)){
		currentInput.focus();
	}

	// Quand on presse entrée 
	if(event.key === 13){
		if (username){
			sendMessage();
			typing = false;
		} else {
			setUsername();
		}
	};

	inputMessage.on("input", function(){
		updateTyping();
	});

	// évenement du clic

	



	
});

