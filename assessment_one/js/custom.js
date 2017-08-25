//get user input
var myInput = document.getElementById("myInput").value;
// store user input in array
var myArray = [myInput];

function nums(){
	if (myInput%3 ==0){
		for(var i = 0; i<=myInput; i++){
			myArray.indexOf(3).push("ping");
			document.write(myArray);
		}
	}
	else if (myInput%5 ==0){
		myArray.indexOf(5).push("pong");
		document.write(myArray);
	}
	else if (myInput%15 ==0){
		myArray.indexOf(15).push("pingpong");
		document.write(myArray);
	}
}

 var output = countUp(countTo);	
      output.forEach(function(item){
      	$("#output").append('<li class="listItem">' + item + '</li>');
      	$("#output").append('<li>' + item + '</li>');
      	});