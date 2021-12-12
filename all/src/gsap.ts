import gsap from 'gsap';
gsap.to("#logo",{
    duration:2,x:200,opacity:0.5,ease:"bounce.out"
});

gsap.fromTo("#logo",{width:100,height:100},{
    duration:1,width:1000,height:1000
})

// gsap.set("#logo",{fontSize:20,x:10});