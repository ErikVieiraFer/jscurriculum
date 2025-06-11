document.addEventListener('DOMContentLoaded', function() {
    
    // --- Funcionalidade de Ano Atual no Rodapé ---
    const anoAtualSpan = document.getElementById('ano-atual');
    if (anoAtualSpan) {
        anoAtualSpan.textContent = new Date().getFullYear();
    }

    // --- Funcionalidade do Botão de Imprimir ---
    const botaoImprimir = document.getElementById('btn-imprimir');
    if (botaoImprimir) {
        botaoImprimir.addEventListener('click', function() {
            window.print();
        });
    }
});