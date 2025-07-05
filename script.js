document.addEventListener("DOMContentLoaded", function () {
  const links = document.querySelectorAll("nav ul li a");
  const modais = {
    sobre: document.getElementById("modal-sobre"),
    formacao: document.getElementById("modal-formacao"),
    experiencia: document.getElementById("modal-experiencia"),
    contato: document.getElementById("modal-contato")
  };

  links.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href").substring(1);

      // Fecha todos os modais antes de abrir o novo
      Object.values(modais).forEach((modal) => {
        modal.style.display = "none";
      });

      // Abre o modal correspondente
      if (modais[targetId]) {
        modais[targetId].style.display = "block";
      }
    });
  });

  // Função para fechar modal ao clicar no botão X ou fora
  window.addEventListener("click", function (e) {
    Object.values(modais).forEach((modal) => {
      const closeBtn = modal.querySelector(".fechar");

      // Clica no botão X
      closeBtn.addEventListener("click", () => {
        modal.style.display = "none";
      });

      // Clica fora do modal
      if (e.target === modal) {
        modal.style.display = "none";
      }
    });
  });
});
