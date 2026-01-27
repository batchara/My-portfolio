// Initialisation d'EmailJS
(function() {
    emailjs.init("5cewiCnZM4PbrXjAT");
})();

// Menu Burger
const burgerMenu = document.getElementById('burger-menu');
const navMenu = document.getElementById('nav-menu');
const closeMenu = document.getElementById('close-menu');
const navLinks = document.querySelectorAll('.nav-links a');

// Ouvrir le menu
burgerMenu.addEventListener('click', () => {
  navMenu.classList.add('active');
  burgerMenu.classList.add('active');
  document.body.style.overflow = 'hidden';
});

// Fermer le menu avec le bouton X
closeMenu.addEventListener('click', () => {
  navMenu.classList.remove('active');
  burgerMenu.classList.remove('active');
  document.body.style.overflow = 'auto';
});

// Fermer le menu quand on clique sur un lien
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    navMenu.classList.remove('active');
    burgerMenu.classList.remove('active');
    document.body.style.overflow = 'auto';
  });
});

// Fermer le menu si on clique en dehors
document.addEventListener('click', (e) => {
  if (!navMenu.contains(e.target) && !burgerMenu.contains(e.target) && navMenu.classList.contains('active')) {
    navMenu.classList.remove('active');
    burgerMenu.classList.remove('active');
    document.body.style.overflow = 'auto';
  }
});

// Gestion du formulaire de contact
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const submitButton = this.querySelector('.submit-button');
    const buttonText = submitButton.querySelector('.button-text');
    const buttonLoader = submitButton.querySelector('.button-loader');
    const formStatus = document.getElementById('form-status');
    
    // Afficher le loader
    buttonText.style.display = 'none';
    buttonLoader.style.display = 'inline';
    submitButton.disabled = true;
    formStatus.textContent = '';
    formStatus.className = 'form-status';
    
    // Récupérer les données du formulaire
    const formData = {
        from_name: document.getElementById('name').value,
        from_email: document.getElementById('email').value,
        message: document.getElementById('message').value
    };
    
    // Envoyer l'email via EmailJS
    emailjs.send('service_z1aawrn', 'template_q20p6g8', formData)
        .then(function(response) {
            console.log('SUCCESS!', response.status, response.text);
            
            // Afficher le message de succès
            formStatus.textContent = '✓ Message envoyé avec succès ! Je vous répondrai bientôt.';
            formStatus.className = 'form-status success';
            
            // Réinitialiser le formulaire
            document.getElementById('contact-form').reset();
            
            // Réinitialiser le bouton
            buttonText.style.display = 'inline';
            buttonLoader.style.display = 'none';
            submitButton.disabled = false;
            
        }, function(error) {
            console.log('FAILED...', error);
            
            // Afficher le message d'erreur
            formStatus.textContent = '✗ Erreur lors de l\'envoi. Veuillez réessayer ou m\'envoyer un email directement à raoudatebatcha@gmail.com';
            formStatus.className = 'form-status error';
            
            // Réinitialiser le bouton
            buttonText.style.display = 'inline';
            buttonLoader.style.display = 'none';
            submitButton.disabled = false;
        });
});
