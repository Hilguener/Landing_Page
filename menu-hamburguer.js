const menuItems = document.getElementById('menu-items');

const burguer = document.getElementById('burguer');
const sidebar = document.getElementById('sidebar');

burguer.addEventListener('click', () => {
  sidebar.classList.toggle('ativa');
});
