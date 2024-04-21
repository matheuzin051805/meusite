document.addEventListener('DOMContentLoaded', () => {
    // Seleciona todos os elementos com a classe 'whatsapp-link'
    const whatsappLinks = document.querySelectorAll('.whatsapp-link');

    // Para cada link de WhatsApp, adiciona um evento de clique
    whatsappLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault(); // Previne o comportamento padrão do link

            const serviceDiv = link.closest('.service'); // Encontra o elemento pai com a classe 'service'
            const phoneNumber = serviceDiv.dataset.number; // Obtém o número de telefone do atributo 'data-number'

            // Abre o link do WhatsApp com o número de telefone e mensagem pré-preenchida
            window.open(`https://wa.me/${phoneNumber}?text=Olá, tenho interesse no serviço "${serviceDiv.querySelector('h3').textContent}"`);

            // Pode personalizar a mensagem pré-preenchida conforme necessário
        });
    });
});
