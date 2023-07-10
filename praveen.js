let myPromise = new Promise((resolve, reject)=>{
    let a = 121;
    let initial = a, c=0;
    while(a>0){
        b= a%10;
        a = parseInt(a/10);
        c = c*10+b;
    }
    if(c == initial){
        resolve('it is palindrom number')
    }
    else{
        reject('it is not a palindrom number')
    }
})

myPromise.then(console.log)
.catch(console.log);