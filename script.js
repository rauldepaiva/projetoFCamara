function sendMessage() {
    let emailElement = document.getElementById("email");
    let subjectElement = document.getElementById("subject");
    let messageElement = document.getElementById("message");
    let confirmationElement = document.getElementById("confirmation");
    
    /* Para a confirmação do e-mail, estou usando apenas verificação se há texto na caixa.
       Poderia usar uma regex para ver se há um endereço com @ etc, embora esse não seja um método válido de validação de email.
       O form já faz essas validaç~es, mas decidi fazer esta função para aplicar JS no projeto. */
    
    if (emailElement.value === "") {
        confirmationElement.innerHTML = "Por favor, insira seu e-mail.";
        // Usando return para não precisar verificar todos os outros.
        return;
    }
    
    if (subjectElement.value === "") {
        confirmationElement.innerHTML = "Por favor, insira o assunto.";
        return;
    }
        
    if (messageElement.value === "") {
        confirmationElement.innerHTML = "Por favor, insira a mensagem.";
        return;
    }
    
    confirmationElement.innerHTML = "Sua mensagem foi enviada!"
}