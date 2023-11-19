var tl = gsap.timeline();

tl.to(".nav h4",
{
   y: 20,
   duration:0.5,
   delay:0.3,
   stagger:0.3,
   ease: Power4
})

tl.from(".page1_in img",{
    opacity:0,
    duration:0.8,
    y:20
})

tl.from(".page1_desc",{
    y:"200",
})
tl.from(".page1_copy",{
    y:"200",
})

