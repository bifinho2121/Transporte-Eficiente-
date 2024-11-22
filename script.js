// JavaScript para as abas

// Obtém todos os links de abas
const tabs = document.querySelectorAll('.tab-link');

// Obtém todas as divs de conteúdo
const tabContents = document.querySelectorAll('.content-tab');

// Função para mudar de aba
function switchTab(e) {
  // Remove a classe 'active' de todos os links de abas
  tabs.forEach(tab => tab.classList.remove('active'));

  // Adiciona a classe 'active' ao link da aba clicada
  e.target.classList.add('active');

  // Esconde todo o conteúdo das abas
  tabContents.forEach(content => content.classList.remove('active'));

  // Exibe o conteúdo da aba clicada
  const targetContent = document.getElementById(e.target.getAttribute('data-target'));
  targetContent.classList.add('active');
}

// Adiciona o ouvinte de evento para cada aba
tabs.forEach(tab => tab.addEventListener('click', switchTab));
