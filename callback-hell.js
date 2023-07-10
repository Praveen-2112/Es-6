function a(){
	setTimeout(() =>{
	console.log("a");
	b();
	},10000);
}

 function b(){
	setTimeout(() =>{
	console.log("b");
	c();
	},7000);
}

function c(){
	setTimeout(() =>{
	console.log("c");
	},9000);
}
	a();