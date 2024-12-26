document.querySelectorAll(".nav_bar a").forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const targetId = this.getAttribute("href").substring(1); // Pega o ID do link
    const targetElement = document.getElementById(targetId);
    const offset = 200; // Altura do espaço que você quer deixar
    const topPosition = targetElement.offsetTop - offset;

    window.scrollTo({
      top: topPosition,
      behavior: "smooth",
    });
  });
});