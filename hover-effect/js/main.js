document.addEventListener("DOMContentLoaded", (event) => {
  // hover effect github: https://github.com/robin-dela/hover-effect

  new hoverEffect({
    parent: document.querySelector(".container"),
    intensity1: 1,
    intensity2: 1,
    speedIn: 1,
    speedOut: 1,
    image1: "./hover-effect/../img/Img1.jpg",
    image2: "./hover-effect/../img/Img2.jpg",
    displacementImage: "./hover-effect/../img/1.jpg",
  })
})