function minasRandom() {
	var minas= Math.floor( (Math.random() * 9) + 1);
	return minas;
}

var minaUno = minasRandom();
var minaDos = minasRandom();
while (minaDos == minaUno)
{
	minaDos = minasRandom();
}
var minaTres = minasRandom();
while (minaTres == minaUno || minaTres == minaDos)
{
	minaTres = minasRandom();
}
console.log(minaUno, minaDos, minaTres);

function paso() {
	var pie = document.getElementById('casilla').value;
	var id = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];

	if (pie > 0 && pie < 10) {
		if (pie != minaUno && pie != minaDos && pie != minaTres) {
			alert("Estas a salvo");
			document.getElementById(id[pie]).innerHTML = "";
		}
		else {
			alert("ouch!!! has perdido \nComienza de nuevo");
			location.reload();
		}
	}
	else {
		alert("OUCH estas fuera del campo! (que también está minado) \nComienza de nuevo");
		location.reload();
	}
	var counter = document.getElementById('counter').value;
	document.getElementById('counter').value = counter + 1;
	//counter += 1;
	console.log(counter);

	if (counter == 11111) {
		alert("Has ganado");
		location.reload();
		document.getElementById('counter').value = "";
	}
}
