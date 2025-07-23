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

    
    const botaoTema = document.getElementById('btn-tema');
    const body = document.body;

    
    const temaSalvo = localStorage.getItem('theme');
    if (temaSalvo === 'dark') {
        body.classList.add('dark-mode');
    }

    if (botaoTema) {
        botaoTema.addEventListener('click', () => {
            body.classList.toggle('dark-mode');

            
            if (body.classList.contains('dark-mode')) {
                localStorage.setItem('theme', 'dark');
            } else {
                localStorage.setItem('theme', 'light');
            }
        });
    }

    
    const botaoIdioma = document.getElementById('btn-idioma');
    const htmlEl = document.documentElement;

    /**
     * Define o idioma da página, atualizando todos os textos e atributos necessários.
     * @param {string} language - O código do idioma a ser aplicado (ex: 'pt-BR', 'en-US').
     */
    const setLanguage = (language) => {
        
        if (!translations || !translations[language]) {
            console.error(`Traduções para o idioma "${language}" não encontradas.`);
            return;
        }

        
        htmlEl.setAttribute('lang', language);

        
        document.querySelectorAll('[data-lang-key]').forEach(element => {
            const key = element.dataset.langKey;
            element.textContent = translations[language][key] || element.textContent;
        });

        
        document.querySelectorAll('[data-lang-key-title]').forEach(element => {
            const key = element.dataset.langKeyTitle;
            element.setAttribute('title', translations[language][key] || element.title);
        });

        
        localStorage.setItem('language', language);
    };

    
    botaoIdioma?.addEventListener('click', () => {
        const newLang = htmlEl.getAttribute('lang') === 'pt-BR' ? 'en-US' : 'pt-BR';
        setLanguage(newLang);
    });

    
    const savedLang = localStorage.getItem('language') || 'en-US';
    setLanguage(savedLang);
});