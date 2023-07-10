function a(){
	setTimeout(() =>{
	console.log("a");
	},2000);b();
}

 function b(){
	setTimeout(() =>{
	console.log("b");
	},1000);c();
}

function c(){
	setTimeout(() =>{
	console.log("c");
	},4000);
}
	a();