// Method .to it works from one HTML point to another
// gsap.to('.promo__text', {
//   duration: 1,
//   xPercent: -50,
//   color: 'red',
//   delay: 1,
// })

// Method .from (from one point to out HTML point)
// gsap.from('.promo__text', {
//   duration: 2,
//   color: 'red',
//   xPercent: -50
// })

// from one point to another, our HTML code will be ingnored
// gsap.fromTo('.promo__text', {
//   x: -200
// }, {
//   x: 200
// })

// periodic work of code
// gsap.to('.promo__text', {
//   duration: 2,
//   xPercent: -50,
// })

// gsap.to('.promo__text', {
//   duration: 1,
//   scale: 0.5,
//   delay: 1
// })

// const tlPromo = gsap.timeline({})
// tlPromo.to('.promo__text', {
//   duration: 1,
//   xPercent: -50,
// })
// .to('.promo__title', {
//   duration: 1,
//   rotation: 180,
// }, '<')

// gsap.set('.rates__card', {
//   opacity: 0
// })

// gsap.to('.rates__card', {
//   opacity: 1,
//   // stagger: 0.1,
//   scrollTrigger: {
//     trigger: '.rates',
//     // 1. part of the block 2. which part of the screen will we start from
//     start: 'top top',
//     end: '+=200',
//     scrub: true,
//     // pin: true,
//     markers: true
//   }
// })