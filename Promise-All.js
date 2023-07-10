function a(){
    return new Promise((x,y)=>{
    x("Hi");
    })
    }
    
    
    function b(){
    return new Promise((e,f)=>{
    f("Hello");
    })
    }
    
    
    
    function c(){
    return new Promise((o,p)=>{
    p("Welcome");
    })
    }
    
    Promise.all([a(),b(),c()])
    .then(console.log)
    .catch(console.log)
    