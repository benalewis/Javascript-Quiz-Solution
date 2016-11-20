var a = document.getElementsByTagName("strong");

var b = a[0].innerHTML;
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

document.getElementById("calchainput").value = gcd(b,c);

document.getElementsByClassName("btn btn--wide push-top--20")[0].click();