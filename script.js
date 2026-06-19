const phoneNumber = "5511999999999"; // Substitua pelo número de telefone desejado
const message = "mensage"; // Substitua pela mensagem desejada

const buttons = document.querySelectorAll(".cta-btn"); // Seleciona todos os botões com a classe "cta-btn"

// Adiciona um evento de clique a cada botão
buttons.forEach(button => {
    button.addEventListener("click", () => {
        const phone = button.getAttribute("data-phone") || phoneNumber;
        const msg = button.getAttribute("data-message") || message;

        const encodedMessage = encodeURIComponent(msg);
        const whatsappUrl = `https://wa.me/${phone}?text=${encodedMessage}`;
        
        window.open(whatsappUrl, "_blank");
    });
});

// scroll suave para links internos
const links = document.querySelectorAll('a[href^="#"]');

links.forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();

    const targetId = this.getAttribute('href');
    const targetElement = document.querySelector(targetId);

    targetElement.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  });
});

