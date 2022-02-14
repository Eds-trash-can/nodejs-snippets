// test if you do enough SQRTs you'll get 1 (exect 0 or lower)

function s(x) {
	let found = false;
	while( !found ) {
		console.log( x, x = Math.sqrt(x) )
		if( x === 1 ) found = true
	}
}

// => YES
