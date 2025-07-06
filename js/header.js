const menuBtn = document.querySelector(".nav-btn");

menuBtn.addEventListener("click", (e) => {
  e.target.classList.toggle("open");
  const isOpen = e.target.classList.contains("open");

  if (isOpen) {
    document.querySelector(".nav-wrap").classList.add("active");
  } else {
    document.querySelector(".nav-wrap").classList.remove("active");
  }
});
