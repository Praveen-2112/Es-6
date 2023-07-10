 function a(){
	setInterval(() =>{
	console.log("a");
	},2000);b();
}

 function b(){
	setInterval(() =>{
	console.log("b");
	},1000);c();
}

function c(){
	setInterval(() =>{
	console.log("c");
	},4000);
}
	a();