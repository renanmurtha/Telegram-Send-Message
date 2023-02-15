/*
 * get axios 
 */

const date = new Date().toUTCString();
const urlTelegram = 'https://api.telegram.org/bot'
let sender = false

function prepareMessage() {
    let responseSpan = document.getElementById("form-response");
    var botHomologacao = document.getElementById('idBot');
    var chat_id = document.getElementById('chat_id');
    var mensagem = document.getElementById('message');

    if (botHomologacao.value.trim() == "" || botHomologacao.value.trim() == null || botHomologacao.value.trim() == undefined) {
        botHomologacao.focus();
        responseSpan.innerHTML = 'Preencha corretamente o formulario!'
    } else
        if (chat_id.value.trim() == "" || chat_id.value.trim() == null || chat_id.value.trim() == undefined) {
            chat_id.focus();
            responseSpan.innerHTML = 'Preencha corretamente o formulario!'
        } else
            if (mensagem.value.trim() == "" || mensagem.value.trim() == null || mensagem.value.trim() == undefined) {
                mensagem.focus();
                responseSpan.innerHTML = 'Preencha corretamente o formulario!'
            } else {
                responseSpan.innerHTML = ''
                responseSpan.className = "spinner-border text-info"
                sender = true;
                sendMessage(mensagem.value.trim(), botHomologacao.value.trim(), chat_id.value.trim(), sender);
            }

}

async function sendMessage(mensagem, botHomologacao, chat_id, sender) {
    let responseSpan = document.getElementById("form-response");
    if (sender === true) {
        if (!isNull(mensagem)) {
            if (!isNull(urlTelegram) && !isNull(botHomologacao) && !isNull(chat_id)) {
                let url = urlTelegram + botHomologacao + `/sendMessage?chat_id=${chat_id}&parse_mode=HTML&text=${mensagem}`
                axios.get(url).then((response) => {
                    responseSpan.className = "form-text text-uppercase text-success-emphasis"
                    document.getElementById("message").value = ''
                    responseSpan.innerHTML = response.data.result.text
                }).catch((error) => {
                    responseSpan.className = "form-text"
                    responseSpan.innerHTML = error
                })
            } else {
                responseSpan.className = "form-text"
                responseSpan.innerHTML = 'dados em branco'
            }
        } else {
            responseSpan.className = "form-text"
            responseSpan.innerHTML = 'mensagem em branco'
        }
    } else {
        responseSpan.className = "form-text"
        responseSpan.innerHTML = 'Não enviar'
    }
}

async function getUpdates() {
    let url = urlTelegram + botHomologacao + '/getUpdates'
    try {
        axios.get(url).then((response) => {
            let data = response.data.result
            for (const element of data) {
                console.log(element)
            }
        }).catch((error) => {
            console.error(error)
        })
    } catch (error) {
        responseSpan.innerHTML = error
    }
}
//getUpdates()

function isNull(x) {
    if (x === undefined) {
        console.error("Valor não definido!");
    } else if (x === null) {
        console.error("Valor é nulo!");
    } else if (x === " ") {
        console.error("Valor é vazaio!");
    } else if (x === "") {
        console.error("Valor é vazaio!");
    }
}