$(document).ready(function() {
    /*Aplicar a máscara ao telefone*/
    $("#telefone").mask("(99) 9999-9999");

    /*Validação*/
    $("#formulario-contato").validate({
        rules: {
            nome: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            mensagem: {
                required: true,
            }
        },
        messages: {
            nome: {
                required: "Campo obrigatório"
            },
            email: {
                required: "Campo obrigatório",
                email: "Por favor, insira um e-mail válido"
            },
            mensagem: {
                required: "Campo obrigatório"
            }
        }
    });
});