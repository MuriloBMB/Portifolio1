document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Previne o envio tradicional do formulário
    
    // Coleta os dados preenchidos pelo usuário
    var userName = document.getElementById('userName').value;
    var userEmail = document.getElementById('userEmail').value;
    var userMessage = document.getElementById('userMessage').value;
    
    // Cria o link mailto com o nome, e-mail e mensagem preenchidos
    var mailtoLink = 'mailto:murilobarrosbahia@gmail.com?subject=Mensagem do site de contato' +
                     '&body=De: ' + encodeURIComponent(userEmail) + '%0D%0A%0D%0A' +
                     'Nome: ' + encodeURIComponent(userName) + '%0D%0A%0D%0A' +
                     'Mensagem: ' + encodeURIComponent(userMessage);
    
    // Redireciona o navegador para abrir o cliente de e-mail com o link mailto
    window.location.href = mailtoLink;

    // Limpa os campos do formulário após o envio
    setTimeout(function() {
        document.getElementById('contactForm').reset(); // Limpa os campos
    }, 1000); // Espera 1 segundo para limpar
});
