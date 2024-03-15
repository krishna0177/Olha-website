
gsap.from(".navbar",{
     y:-100,
     duration:1,
     opacity:0,
     delay:0.2
})
gsap.from("#gola",{
     y:-1000,
     duration:1.2,
     opacity:0,
     delay:0.2
})
gsap.from(".page-1 h1,  .page-1 h1:nth-child(2)",{
     y:70,
     duration:1.2,
     opacity:0,
     delay:0.3,
     stagger:0.5
     
})
gsap.from(".container",{
     y:200,
     duration:1.2,
     opacity:0,
     delay:0.2
})
let tl= gsap.timeline({
     scrollTrigger:{
          trigger:"page-1",
          scroller:"body",
          markers:true,
          start:"top -3%",
          scrub:3
     }
})
let t2= gsap.timeline({
     scrollTrigger:{
          trigger:"page-1",
          scroller:"body",
          markers:true,
          start:"top -50%",
          scrub:3
     }
})

tl.to("#gola",{
     left:"110vw",
     top:"80vh",
     duration:0.5,
     rotate:520,
     scrub:4,
} ,"elem1")

tl.to(".container",{
     rotate:35,
     duration:0.5,
     scrub:4,
} ,"elem1")






t2.to(".container",{
     rotate:-5,
     scrub:4,
} ,"elem1")

tl.to(".page2-in h1",{      
     onUpdate:function(){
          $('.page2-in h1').textillate({ in: { fadeInUp: 'fadeInUp' } });
     }
},"anim1")


// tl.to(".page2-elem h4, .page2-elem p",{
//      opacity:0,
//      duration:0.5,
// },"amin1")