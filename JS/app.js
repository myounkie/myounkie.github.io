$(document).ready(function(){

	console.log("hello")

	//Name
	$('#nameSubmit').onclick = function(){
			console.log("hello")
			var name = $('#nameInput').val;
			var namedisplay = $('#nameDisplay').val;
			console.log(name)
			console.log(namedisplay)
			
	}

    //Location
	$('#locationSubmit').onclick = function(){
			var location = $('#locationInput').value;
			console.log(location)
			
	}


  })
