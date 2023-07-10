function b(){
    return new Promise((x,y)=>{
    setTimeout(()=>{
    ("I am B")
    },2000)
    })
    }
    
    
    function c(){
    return new Promise((o,p)=>{
    setTimeout(()=>{
    o("I am C")
    },1000)
    })
    }
    
    
    a().then((d)=>{
    console.log(d)
    return b()
    })
    
    .then((e)=>{
    console.log(e)
    return c()
    })
    
    
    .then((h)=>{
    console.log(h)
    })
    
    .catch((o)=>{
    console.log(o);
    })