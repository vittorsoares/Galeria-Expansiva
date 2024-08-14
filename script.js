const images = document.querySelectorAll(".galeria img");

images[0].classList.add("active");

images.forEach((img) => {
  img.addEventListener("click", () => {
    images.forEach((image) => image.classList.remove("active"));

    img.classList.add("active");
  });
});
