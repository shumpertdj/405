//Darnell Shumpert
//Javascript to create html page that makes 100 random colors and shows hex value for the colors
function randomcolorlist() { 
	console.log('<html><body><ul>');
	for (var i = 0; i < 100; i++){
		var randomColor = '#'+Math.floor(Math.random()*16777215).toString(16);
	    var li = '<li style="color:' +rancolor+'">'+rancolor+'</li>';
	    console.log(li);
	}
	console.log('</ul></body</html>');
}

randomcolorlist();
