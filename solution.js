var a = document.getElementsByTagName("strong");

var b = a[0].innerHTML; //indentify where the numbers are on a HTML page
var c = a[1].innerHTML;

//from https://www.nayuki.io/page/calculate-gcd-javascript
function gcd(x, y) { 
	while (y !== 0) {
		var z = x % y;
		x = y;
		y = z;
	}
	return x;
}

document.getElementById("calchainput").value = gcd(b,c); //inputs the numbers into the form

document.getElementsByClassName("btn btn--wide push-top--20")[0].click(); //presses the button