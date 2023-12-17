gsap.registerPlugin(Flip)

const container = document.querySelector(".container")
const box = document.querySelector(".box")

document.addEventListener("click", e => {
  const state = Flip.getState(".box") // record the initial rotation, size, position of the element
  container.appendChild(box) // we reparent the element. We take box and make it the parent of container
  Flip.from(state, {duration: 1, ease: "power1.out"}) // take the initial state, and then we get state and options
})