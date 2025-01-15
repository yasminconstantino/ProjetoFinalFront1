// Função genérica para validar os formulários
/*function validarFormulario(event, formId, regras) {
    event.preventDefault(); // Evita envio do formulário até que tudo seja validado

    const formulario = document.getElementById(formId); // Seleciona o formulário pelo ID
    const inputs = formulario.querySelectorAll("input"); // Obtém todos os inputs do formulário
    limparMensagensErro(formulario); // Limpa mensagens de erro anteriores

    let formularioValido = true; // Controle de validação final

    // Validação com base nas regras passadas
    inputs.forEach(input => {
        const regra = regras[input.id]; // Regra específica para o input
        if (regra) {
            const valor = input.value.trim();

            // Validação de campo obrigatório
            if (regra.required && valor === "") {
                exibirErro(input, `${input.previousElementSibling.textContent} é obrigatório.`);
                formularioValido = false;
            }

            // Validação de regex
            if (regra.regex && valor !== "" && !regra.regex.test(valor)) {
                exibirErro(input, regra.mensagemErro);
                formularioValido = false;
            }
        }
    });

    // Se tudo for válido, exibe uma mensagem e reseta o formulário
    if (formularioValido) {
        //alert("Formulário enviado com sucesso!");
        //formulario.reset(); // Reseta o formulário se tudo estiver válido

        // Redireciona com base no ID do formulário
        if (formularioId === "formEndereco") {
            window.location.href = "cadastro_endereco.html";
        } else if (formularioId === "formTutor") {
            window.location.href = "cadastro_endereco.html";
        } else if (formularioId === "formVeterinario") {
            window.location.href = "index.html";
        }
    }
}



// Exibe mensagens de erro
function exibirErro(elemento, mensagem) {
    const erro = document.createElement('span');
    erro.classList.add('erro');
    erro.style.color = 'red';
    erro.innerText = mensagem;
    elemento.parentNode.insertBefore(erro, elemento.nextSibling);
}

// Limpa mensagens de erro do formulário específico
function limparMensagensErro(formulario) {
    const mensagensErro = formulario.querySelectorAll('.erro');
    mensagensErro.forEach(mensagem => mensagem.remove());
}

// Regras específicas de validação para cada formulário
const regrasFormEndereco = {
    cep: { required: true, regex: /^\d{5}-\d{3}$/, mensagemErro: "O CEP deve estar no formato 00000-000." },
    cidade: { required: true },
    estado: { required: true },
    rua: { required: true },
    numeroResidencia: { required: true }
};

const regrasFormTutor = {
    nomeTutor: { required: true },
    email: { required: true, regex: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, mensagemErro: "Por favor, insira um email válido." },
    senha: { required: true },
    dataNascimento: { required: true },
    cpf: { required: true, regex: /^\d{3}\.\d{3}\.\d{3}-\d{2}$/, mensagemErro: "O CPF deve estar no formato 000.000.000-00." },
    numeroTelefone: { required: true, regex: /^\(\d{2}\) \d{4,5}-\d{4}$/, mensagemErro: "O telefone deve estar no formato (00) 00000-0000." }
};

const regrasFormVeterinario = {
    nome: { required: true },
    crm: { required: true },
    especialidade: { required: true },
    numeroTelefone: { required: true, regex: /^\(\d{2}\) \d{4,5}-\d{4}$/, mensagemErro: "O telefone deve estar no formato (00) 00000-0000." },
    senha: { required: true }
};

// Adiciona eventos para cada formulário
document.getElementById('formEndereco').addEventListener('submit', (e) => validarFormulario(e, 'formEndereco', regrasFormEndereco));
document.getElementById('formTutor').addEventListener('submit', (e) => validarFormulario(e, 'formTutor', regrasFormTutor));
document.getElementById('formEndereco').addEventListener('submit', (e) => validarFormulario(e, 'formEndereco', regrasFormVeterinario));
*/


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
        if (formularioId === "formEndereco") {
            window.location.href = "endCadastrado.html";
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
document.getElementById("formEndereco").addEventListener("submit", validarFormulario);

