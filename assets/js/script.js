document.querySelectorAll(".nav_bar a").forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const targetId = this.getAttribute("href").substring(1); // Pega o ID do link
    const targetElement = document.getElementById(targetId);
    const offset = 150; // Altura do espaço que você quer deixar
    const topPosition = targetElement.offsetTop - offset;

    window.scrollTo({
      top: topPosition,
      behavior: "smooth",
    });
  });
});


// Seleciona o checkbox e o menu
const burger = document.getElementById('burger');
const menu = document.querySelector('.nav');

// Adiciona um listener para abrir/fechar o menu
burger.addEventListener('change', () => {
  if (burger.checked) {
    menu.style.display = 'flex';
    menu.style.opacity = '1';
    menu.style.transform = 'translateY(0)';
  } else {
    menu.style.opacity = '0';
    menu.style.transform = 'translateY(-20px)';
    setTimeout(() => {
      menu.style.display = 'none';
    }, 300); // Tempo igual ao da transição CSS
  }
});

