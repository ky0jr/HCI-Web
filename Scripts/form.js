var quantity;
var cost;

function inputData(){
	quantity = document.getElementById("Quantity")
	cost = 1000 * quantity;
}

function update()
{
	console.log("a");
	document.getElementById("totalPayment").innerHTML = "Total Payment : " + cost;
}