# Configuration EmailJS pour le formulaire de contact

## Étapes pour configurer EmailJS

### 1. Créer un compte EmailJS
1. Allez sur [https://www.emailjs.com/](https://www.emailjs.com/)
2. Cliquez sur "Sign Up" et créez un compte gratuit
3. Vérifiez votre email

### 2. Créer un service Email
1. Dans le dashboard EmailJS, allez dans **Email Services**
2. Cliquez sur **Add New Service**
3. Choisissez votre fournisseur d'email (Gmail recommandé)
3. Connectez votre compte Gmail (raoudate.batcha@gmail.com)
5. Notez le **Service ID** (exemple: service_abc123)

### 3. Créer un template d'email
1. Allez dans **Email Templates**
2. Cliquez sur **Create New Template**
3. Utilisez ce template :

```
Sujet: Nouveau message de {{from_name}} - Portfolio

Corps:
Vous avez reçu un nouveau message depuis votre portfolio :

Nom: {{from_name}}
Email: {{from_email}}

Message:
{{message}}

---
Ce message a été envoyé depuis votre formulaire de contact.
```

4. Les variables à utiliser :
   - `{{from_name}}` : Nom de l'expéditeur
   - `{{from_email}}` : Email de l'expéditeur
   - `{{message}}` : Message de l'expéditeur
   - `{{to_email}}` : Votre email (raoudate.batcha@gmail.com)

5. Dans **To Email**, mettez : `{{to_email}}`
6. Notez le **Template ID** (exemple: template_xyz789)

### 4. Obtenir votre clé publique
1. Allez dans **Account** > **General**
2. Copiez votre **Public Key** (exemple: abcd1234efgh5678)

### 5. Configurer le fichier script.js
Ouvrez le fichier `script.js` et remplacez :

```javascript
emailjs.init("YOUR_PUBLIC_KEY"); // Remplacez par votre Public Key

// Plus bas dans le fichier :
emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', formData)
```

Par :
```javascript
emailjs.init("abcd1234efgh5678"); // Votre Public Key

emailjs.send('service_abc123', 'template_xyz789', formData)
```

### 6. Tester le formulaire
1. Ouvrez votre portfolio dans le navigateur
2. Remplissez le formulaire de contact
3. Cliquez sur "Envoyer"
4. Vérifiez que vous recevez l'email sur raoudate.batcha@gmail.com

## Plan gratuit EmailJS
- 200 emails par mois
- Idéal pour un portfolio personnel

## En cas de problème
- Vérifiez la console du navigateur (F12) pour les erreurs
- Assurez-vous que tous les IDs sont corrects
- Vérifiez que votre email Gmail est bien connecté au service

## Alternative simple (si EmailJS ne fonctionne pas)
Vous pouvez aussi utiliser un simple `mailto:` en modifiant le formulaire :

```html
<form action="mailto:raoudate.batcha@gmail.com" method="post" enctype="text/plain">
```

Mais EmailJS offre une meilleure expérience utilisateur.
