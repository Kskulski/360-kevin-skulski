var die = [];

function roll(){
	for (i = 0; i < 5; i++){
		die.push(Math.ceil(Math.random()*6));
	}		
	document.getElementById("result").innerHTML = die.join("     ");
	die = [];
}