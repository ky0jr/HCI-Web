window.onload = function()
{
	var temp = localStorage.getItem("cost");
	document.getElementById("totalPrice").innerHTML = "Total Price : " + temp;
}

var a = new Date(); a.setDate(a.getDate()+1);
var targetDate = a.getTime();

var x = setInterval(function(){
	var currDate = new Date().getTime();
	var range = targetDate - currDate;
	var hours = Math.floor((range % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
	var minutes = Math.floor((range % (1000 * 60 * 60)) / (1000 * 60));
	var seconds = Math.floor((range % (1000 * 60)) / 1000); 
	document.getElementById("timer").innerHTML = hours + ":" + minutes + ":" + seconds;

	if (range < 0)
	{
    	clearInterval(x);
    	document.getElementById("timer").innerHTML = "Timeout";
	}
}
,1000)

function move(){
	window.location.replace("Ty.html");
}	