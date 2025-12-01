// Menu mobile toggle
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuButton = document.getElementById('mobile-menu');
    const navMenu = document.querySelector('.nav-menu');
    
    if (mobileMenuButton) {
        mobileMenuButton.addEventListener('click', function() {
            navMenu.classList.toggle('active');
        });
    }
    
    // Simulazione di "ultima modifica" per dimostrare versioni
    const lastModified = document.getElementById('last-modified');
    if (lastModified) {
        const now = new Date();
        lastModified.textContent = now.toLocaleDateString('it-IT');
    }
    
    // Highlight per le sezioni GitHub (effetto didattico)
    const githubSections = document.querySelectorAll('.github-example, .github-workflow');
    githubSections.forEach(section => {
        section.addEventListener('click', function() {
            this.style.boxShadow = '0 0 0 3px #2ea44f';
            setTimeout(() => {
                this.style.boxShadow = '';
            }, 1000);
        });
    });
    
    // Messaggio console per sviluppatori
    console.log('👋 Benvenuto nel sito didattico della classe 5 Informatica!');
    console.log('📚 Questo è un progetto di esempio per imparare Git e GitHub.');
    console.log('🔍 Prova a fare fork e creare una pull request!');
});