$(document).ready(function() {

    const nomeInput = $('nome')
    const emailInput = $('email')
    const telefoneInput = $('telefone')

    $('#telefone').mask('(00) 00000-0000', {
        placeholder: '(__) _____-____'
    })

    $('#CPF').mask('000.000.000-00', {
        placeholder: '___.___.___-__'
    })

    $('#CEP').mask('00000-000', {
        placeholder: '_____-___'
    })

    $('form').validate({
        rules: {
            nome: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            telefone: {
                required: true
            },
            CPF: {
                required: true
            },
            endereço: {
                required: true
            },
            CEP: {
                required: true
            },
        },
        messages: {
            nome: 'Por favor, insira seu nome.',
            telefone: 'Por favor, insira seu telefone.',
            email: 'Por favor, insira seu e-mail.',
            CPF: 'Por favor, insira seu CPF.',
            endereço: 'Por favor, insira seu endereço completo.',
            CEP: 'Por favor, insira seu CEP.',
        },
        submitHandler: function(form) {
            console.log(form)
        },
        invalidHandler: function(evento, validador) {
            let camposIncorretos = validador.numberOfInvalids();
            if (camposIncorretos) {
                alert (`Existem ${camposIncorretos} campos incorretos`)
            } 
        }
    })
})