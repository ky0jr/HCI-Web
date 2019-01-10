var quantity;
var cost;

var promo1;
var promo2;


function inputData(){
	setPromo();
	var name = document.getElementById("Name").value;
	var phone = document.getElementById("Phone").value;
	var address = document.getElementById("Address").value;
	var temp = document.getElementById("Promo").value;
	quantity = document.getElementById("Quantity").value;
	temp = temp.toLowerCase();
	cost = 1000 * quantity + 5000;
	if(temp == promo1)
	{
		cost = 500 * quantity + 5000;
	}
	else if(temp == promo2)
	{
		cost = 1000*quantity;
	}	
	if(name.length < 4)
	{
		alert("name length must be 4 or higher!");
	}
	else if(address.length < 6)
	{
		alert("address length must be 6 or higher!");
	}
	else if(quantity < 1)
	{
		alert("quantity must be at least 1!")
	}
	if(name.length >= 4 && address.length >= 6 && quantity >= 1)
	{
		window.location.replace("..//HCI/form 2.html");
	}
	localStorage.setItem("cost", cost);
}

function pay()
{
	var pay = document.getElementsByName('Payment');
	if(pay != null)
	{
		window.location.replace("..//HCI/form 3.html");
	}
}
window.onload = function()
{
	update();
	if(window.location.href == "..//HCI/form 3.html")
	{
		console.log("masuk");
	}
}

function update()
{
	console.log(cost);
	var temp = localStorage.getItem("cost")
	document.getElementById("totalPayment").innerHTML = "Total Payment : " + temp;
}

function setPromo()
{
	promo1 = "avlaundrynomor1";
	promo2 = "gratisongkirav";
}
