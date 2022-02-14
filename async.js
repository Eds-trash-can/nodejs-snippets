const fs = require("fs")

async function a(a) {
	fs.readdir(a, (a,b)=>{
		//
		console.log(a,b)
		//
	});

}

a("/")

async function e() {
	c = await fs.readFile("./test", (a,b) => {console.log(a,b.toString())})
	console.log(c.toString())
	return c.toString()
}

console.log(e())
