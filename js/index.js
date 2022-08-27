
function handleClick() {
	let packagePrice = document.getElementById("packagePrice").value;
	let packageQuantity = document.getElementById("packageQuantity").value;
	let rollLength = document.getElementById("rollLength").value;

	if (isNaN(packagePrice) || isNaN(packageQuantity) || isNaN(rollLength)) {
		alert("Há um erro no formulário");
	}

	let pricePerRoll = packagePrice / packageQuantity;
	let pricePerMeter = pricePerRoll / rollLength;

	aaa(pricePerMeter);

	return false;
}

function aaa(pricePerMeter) {
	document.getElementById("result-text").innerText = `Cada metro de papel custa R$ ${pricePerMeter.toLocaleString('pt-br', { minimumFractionDigits: 4, maximumFractionDigits: 4 })}.`
}