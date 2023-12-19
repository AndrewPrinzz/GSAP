import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const container = document.querySelector(".container") as HTMLDivElement
const sections = gsap.utils.toArray(".container section") as HTMLDivElement[]
const texts = gsap.utils.toArray(".anim") as HTMLDivElement[]
const mask = document.querySelector(".mask") as HTMLDivElement
console.log('sections: ', sections);

let scrollTween = gsap.to(sections, {
  xPercent: -100 * (sections.length - 1), // to find out how far the scroll will go
  ease: "none",
  scrollTrigger: {
    trigger: ".container",
    pin: true, // we want it to pin while using your mouse
    scrub: 1,
    end: "+=3000" // speed of scrolling
  }
})

gsap.to(mask, {
  width: "100%",
  scrollTrigger: {
    trigger: ".wrapper",
    start: "top left",
    scrub: 1
  }
})

// when section is visible it triggers
sections.forEach(section => {
  let text = section.querySelectorAll(".anim")

  gsap.from(text, {
    // go from the values that we specified
    y: -130,
    opacity: 0,
    duration: 2,
    ease: "elastic",
    stagger: 0.1,
    scrollTrigger: {
      trigger: section,
      containerAnimation: scrollTween,
      start: "left center",
      // markers: true
    }
  })
})