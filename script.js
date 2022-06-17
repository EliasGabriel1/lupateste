var zoomPad = document.querySelector(".zoomPad");
zoomPad.setAttribute("id","image-product")

const imageproduct = document.getElementById("image-product");
const img = document.getElementById("img");

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
