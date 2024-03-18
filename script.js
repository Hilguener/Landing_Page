document.addEventListener("DOMContentLoaded", function () {
  const mobileMenuButton = document.querySelector('.hamburger');
  const navBar = document.querySelector(".nav-bar");
  const mobileMenuAnchors = document.querySelectorAll('.nav-bar a');
  const servicosSection = document.getElementById("services");
  const bemVindoSection = document.getElementById("about-us");
  const contatoSection = document.getElementById("contact");

  mobileMenuButton.addEventListener('click', toggleMobileMenu);
  mobileMenuAnchors.forEach(anchor => {
      anchor.addEventListener('click', scrollToSection);
  });

  // Atualiza o item do menu de navegação ativo durante a rolagem
  window.addEventListener('scroll', function () {
      if (isElementInViewport(bemVindoSection)) {
          setActiveMenuLink(1);
      } else if (isElementInViewport(servicosSection)) {
          setActiveMenuLink(2);
      } else if (isElementInViewport(contatoSection)) {
          setActiveMenuLink(3);
      } else {
          // Se nenhuma seção estiver visível, remova todas as classes ativas
          mobileMenuAnchors.forEach(anchor => {
              anchor.classList.remove('active');
          });
      }
  });

  function scrollToSection(event) {
      const targetId = this.getAttribute("href").substring(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
          event.preventDefault();

          const windowHeight = window.innerHeight;
          const sectionHeight = targetElement.offsetHeight;
          const sectionTop = targetElement.offsetTop;
          const scrollToPosition = sectionTop - (windowHeight - sectionHeight) / 2;

          window.scrollTo({
              top: scrollToPosition,
              behavior: 'smooth'
          });

          closeMobileMenu();
          setActiveMenuLink([...mobileMenuAnchors].indexOf(this));
      }
  }

  function setActiveMenuLink(index) {
      mobileMenuAnchors.forEach(anchor => {
          anchor.classList.remove('active');
      });
      mobileMenuAnchors[index].classList.add('active');
  }

  function toggleMobileMenu(e) {
      e.stopPropagation();
      navBar.classList.toggle("active");
  }

  function closeMobileMenu() {
      if (navBar.classList.contains("active")) {
          navBar.classList.remove("active");
      }
  }

  // Função auxiliar para verificar se um elemento está visível na tela
  function isElementInViewport(el) {
      var rect = el.getBoundingClientRect();
      return (
          rect.top >= 0 &&
          rect.left >= 0 &&
          rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
          rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      );
  }
});