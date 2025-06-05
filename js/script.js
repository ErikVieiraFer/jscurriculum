document.addEventListener('DOMContentLoaded', function() {
    console.log("Currículo HTML carregado e script.js funcionando!");

    
    const anoAtualSpan = document.getElementById('ano-atual');
    if (anoAtualSpan) {
        anoAtualSpan.textContent = new Date().getFullYear();
    }
});