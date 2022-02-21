// something something math stochastik

// custom condition:
function condition(a,b) {
	return a | b
}

// num rounds:
let icnt = 100000

// ---- code ----

let good_rounds = 0;
let good_round;
let round = 1;

function tof() { // true or false
	return !Math.floor(Math.random() * 2)	
}

for( let i = 0 ; i < icnt ; i++ ) {
	coin1 = tof()
	coin2 = tof()

	if( condition(coin1, coin1) ) { good_rounds++; good_round = true}
	else good_round = false

	console.log(`a: ${coin1.toString().padEnd(5," ")} b: ${coin2.toString().padEnd(5," ")} conditionq ${good_round.toString().padEnd(5," ")} #of rounds: ${good_rounds.toString().padEnd(icnt.toString().length, " ")} of percentage ${(good_rounds/round).toString().padEnd(20," ")} round ${round.toString().padStart(icnt.toString().length, " ")} ${Math.floor((round / icnt)*100).toString().padStart(3, " ")}% done`)
	round++
}

console.log(`Conclusion:\ncondition: function "${condition.toString().split("\n")[1]}"\nis true ${Math.floor(good_rounds/round*100)}% of the time.`)
