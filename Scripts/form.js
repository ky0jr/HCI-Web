var quantity;
var cost;

function inputData(){
	quantity = document.getElementById("Quantity").value;
	cost = 1000 * quantity;
	localStorage.setItem("cost", cost);
}

window.onload = function()
{
	update();
}

function update()
{
	console.log(cost);
	var temp = localStorage.getItem("cost")
	document.getElementById("totalPayment").innerHTML = "Total Payment : " + temp;
}

document.addEventListener("click", function(){
 inputData();
});