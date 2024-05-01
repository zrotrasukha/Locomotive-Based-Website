
const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true
});

let tl = gsap.timeline();

tl.to("#page1, #page2", {
    y: "100vh",
    duration: 0,
    scale: 0.5
})

tl.to("#page1, #page2", {
    y: "0vh",
    duration: 2,
    delay: 1
})
// tl.to("#page1",{
//     y: "10vh",
//     duration: , 
//     delay: 0
// })

tl.to("#page1, #page2", {
    duration: 1,
    rotate: 360,
    scale: 1

})
// // GSAP code to handle hover effect
// gsap.fromTo('#anda', { opacity: 0 }, { opacity: 1, duration: 1 });

// // Initial position of the h3 and arrow
// gsap.set('#anda h3', { x: 0 });
// gsap.set('#anda .arrow-img', { x: -50, opacity: 0 });

// // Hover effect using GSAP
// document.querySelector('#anda').addEventListener('mouseenter', () => {
//     gsap.to('#anda h3', { x: 50, duration: 0.5 });
//     gsap.to('#anda .arrow-img', { x: 0, opacity: 1, duration: 0.5 });
// });

// document.querySelector('#anda').addEventListener('mouseleave', () => {
//     gsap.to('#anda h3', { x: 0, duration: 0.5 });
//     gsap.to('#anda .arrow-img', { x: -50, opacity: 0, duration: 0.5 });
// });

gsap.set("#anda h3", { 
    x:-50
})
gsap.set("#anda img", { 
    x:-160
})

document.querySelector("#anda").addEventListener('mouseenter', () => { 
    gsap.to("#anda h3", { 
        x: 250,
        autoAlpha: 0, 
        duration: 0.5

    })
    gsap.to("#anda img", { 
        x: 110,
        autoAlpha: 1,
        duration: 0.5
    })
})
document.querySelector("#anda").addEventListener('mouseleave', () => { 
    gsap.to("#anda h3", { 
        x: -50,
        autoAlpha: 1,
        duration: 0.5
    })
    gsap.to("#anda img", { 
        x: -160,
        autoAlpha: 0,
        duration: 0.5
    })
})