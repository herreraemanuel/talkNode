'use strict';

 var socket = io('http://localhost:3000');
  socket.on('connect', function(){
  	console.log('On connect');
  });

  socket.on('newMessage', function(data){
  	console.log('Event: ', data);
  	$('#response').html('<b>' + data + '</b>');
  });

  socket.on('disconnect', function(){
	console.log('On disconnect');  		
  })

  $('#thebutton').click(function(e) {
  	var message = $('#themessage').val();
  	console.log('message ', message);
  	socket.emit('message', message);
  });