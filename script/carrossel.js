    // Obtém todos os inputs de rádio
    const slides = document.querySelectorAll('input[name="carousel"]');
    let currentIndex = 0;
  
    // Função para alternar o slide
    function nextSlide() {
      // Remove o check do slide atual
      slides[currentIndex].checked = false;
  
      // Incrementa o índice e reseta se necessário
      currentIndex = (currentIndex + 1) % slides.length;
  
      // Ativa o próximo slide
      slides[currentIndex].checked = true;
    }
  
    // Alterna automaticamente a cada 3 segundos
    setInterval(nextSlide, 3000);