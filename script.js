// Initialisation d'EmailJS
(function() {
    emailjs.init("YOUR_PUBLIC_KEY"); // À remplacer par votre clé publique EmailJS
})();

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
        message: document.getElementById('message').value,
        to_email: 'raoudate.batcha@gmail.com'
    };
    
    // Envoyer l'email via EmailJS
    emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', formData)
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
            formStatus.textContent = '✗ Erreur lors de l\'envoi. Veuillez réessayer ou m\'envoyer un email directement à raoudate.batcha@gmail.com';
            formStatus.className = 'form-status error';
            
            // Réinitialiser le bouton
            buttonText.style.display = 'inline';
            buttonLoader.style.display = 'none';
            submitButton.disabled = false;
        });
});
