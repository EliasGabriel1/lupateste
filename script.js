var zoomPad = document.querySelector("#include .zoomPad");
zoomPad.setAttribute("class","image-product zoomPad")

const imageproduct = document.querySelector(".zoomPad");
const img = document.querySelector(".zoomPad img");

imageproduct.addEventListener("mousemove", (z) => {
  const x = z.clientX - z.target.offsetLeft;
  const y = z.clientY - z.target.offsetTop;

  img.style.transformOrigin = `${x}px ${y}px`;
  img.style.transform = `scale(2)`;
});

imageproduct.addEventListener("mouseleave", () => {
  img.style.transformOrigin = `center center`;
  img.style.transform = `scale(1)`;
});