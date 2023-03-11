var navigation = document.querySelector('.navbar'),
    heroImage = document.querySelector('.avatar'),
    heroText = document.querySelector('.heroText > .text-content')
   

gsap.from(navigation,
    {
        delay:0.5,
        opacity:0,
        ease:"slow",
        duration: 1, ease: "expo.out", y: -500 
    })
    gsap.from(heroImage,{
        duration: 2.5, 
        delay:1,
        x:100,
        ease: "back.out(1.7)", 
        opacity:0,
        y: -100,
    })
    gsap.from(heroText,{
        duration:3,
        delay:0.5,
        x:-200,
        ease: "back.out(1.7)",
        opacity:0
        // y:100
    })
   