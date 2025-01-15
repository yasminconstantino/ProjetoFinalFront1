function validarFormulario(event) {
    event.preventDefault(); // Impede o envio padrão do formulário

    const formulario = event.target; // Captura o formulário atual
    const formularioId = formulario.id; // Obtém o ID do formulário

    limparMensagensErro(); // Limpa mensagens de erro anteriores

    let formularioValido = true; // Controla a validação

    // Validações genéricas (aplicáveis a todos os formulários)
    const camposObrigatorios = formulario.querySelectorAll("input[required]");
    camposObrigatorios.forEach((campo) => {
        if (campo.value.trim() === "") {
            exibirErro(campo, `${campo.name} é obrigatório.`);
            formularioValido = false;
        }
    });

    // Redireciona para a página apropriada se válido
    if (formularioValido) {
        alert("Formulário enviado com sucesso!");
        formulario.reset(); // Reseta o formulário

        // Redireciona com base no ID do formulário
        if (formularioId === "formVeterinario") {
            window.location.href = "homeVet.html";
        }
    }
}

// Funções de suporte (exibir e limpar erros)
function exibirErro(elemento, mensagem) {
    const erro = document.createElement("span");
    erro.classList.add("erro");
    erro.style.color = "red";
    erro.innerText = mensagem;
    elemento.parentNode.insertBefore(erro, elemento.nextSibling);
}

function limparMensagensErro() {
    const mensagensErro = document.querySelectorAll(".erro");
    mensagensErro.forEach((mensagem) => mensagem.remove());
}

// Adiciona o evento de validação a cada formulário
document.getElementById("formVeterinario").addEventListener("submit", validarFormulario);
