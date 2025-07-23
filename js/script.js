document.addEventListener('DOMContentLoaded', function() {
    
    
    const anoAtualSpan = document.getElementById('ano-atual');
    if (anoAtualSpan) {
        anoAtualSpan.textContent = new Date().getFullYear();
    }

    
    const botaoImprimir = document.getElementById('btn-imprimir');
    if (botaoImprimir) {
        botaoImprimir.addEventListener('click', function() {
            window.print();
        });
    }

    
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    
    const sections = document.querySelectorAll('main section');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); 
            }
        });
    }, { threshold: 0.15 }); 

    sections.forEach(section => observer.observe(section));

    // --- FUNCIONALIDADE DE TEMA ESCURO ---
    const botaoTema = document.getElementById('btn-tema');
    const body = document.body;

    // Verifica se há um tema salvo no localStorage
    const temaSalvo = localStorage.getItem('theme');
    if (temaSalvo === 'dark') {
        body.classList.add('dark-mode');
    }

    if (botaoTema) {
        botaoTema.addEventListener('click', () => {
            body.classList.toggle('dark-mode');

            // Salva a preferência do usuário no localStorage
            if (body.classList.contains('dark-mode')) {
                localStorage.setItem('theme', 'dark');
            } else {
                localStorage.setItem('theme', 'light');
            }
        });
    }
});