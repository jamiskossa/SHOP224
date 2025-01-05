// main.js


document.addEventListener('DOMContentLoaded', (event) => {
    const toggleMenu = document.querySelector('.toggle-menu');
    const nav = document.querySelector('nav ul');
  
    toggleMenu.addEventListener('click', () => {
      nav.classList.toggle('show');
    });
  
    const chatWidget = document.querySelector('.chat-widget');
    chatWidget.addEventListener('click', () => {
      chatWidget.classList.toggle('open');
    });
  
    // Animation pour les cartes de produits
    const productCards = document.querySelectorAll('.product-card');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = 1;
          entry.target.style.transform = 'translateY(0)';
        }
      });
    }, { threshold: 0.1 });
  
    productCards.forEach(card => {
      card.style.opacity = 0;
      card.style.transform = 'translateY(20px)';
      card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
      observer.observe(card);
    });
  
    // Fonction pour ajouter un produit (simulation)
    function ajouterProduit(nom, prix, description, image) {
      const productGrid = document.querySelector('.product-grid');
      const productCard = document.createElement('div');
      productCard.className = 'product-card';
      productCard.innerHTML = `
        <img src="${image}" alt="${nom}" style="width:100%; height:200px; object-fit:cover;">
        <h3>${nom}</h3>
        <p>${description}</p>
        <p>Prix: ${prix} GNF</p>
        <button>Contact</button>
      `;
      productGrid.appendChild(productCard);
    }
  
    // Simulation d'ajout de produits
    ajouterProduit('Crème Nivea', '15000', 'crème corporel', 'https://example.com/ananas.jpg');
    ajouterProduit('Masque traditionnel', '50000', 'Masque artisanal de la Guinée Forestière', 'https://example.com/masque.jpg');
    ajouterProduit('Café de Macenta', '20000', 'Café bio de la région de Macenta', 'https://example.com/cafe.jpg');
  
    // Animation du fond
    document.body.style.backgroundImage = 'linear-gradient(135deg, rgba(255,255,255,0.7), rgba(230,230,250,0.7))';
    document.body.style.backgroundSize = '400% 400%';
    document.body.style.animation = 'gradient 15s ease infinite';
  
    const style = document.createElement('style');
    style.textContent = `
      @keyframes gradient {
        0% { background-position: 0% 50%; }
        50% { background-position: 100% 50%; }
        100% { background-position: 0% 50%; }
      }
    `;
    document.head.appendChild(style);
  });