/*
 * get axios 
 */

const urlTelegram = 'https://api.telegram.org/bot'
let sender = false

let responseSpan = null
var botHomologacao = null
var chat_id = null
var mensagem = null
const errorMensagem = "Preencha todos os campos / Fill in all fields"

function prepareMessage() {
    responseSpan = document.getElementById("form-response");
    botHomologacao = document.getElementById('idBot');
    chat_id = document.getElementById('chat_id');
    mensagem = document.getElementById('message');
    responseSpan.style.fontSize="20px"
    if (botHomologacao.value.trim() == "" || botHomologacao.value.trim() == null || botHomologacao.value.trim() == undefined) {
        botHomologacao.focus();
        responseSpan.innerHTML = errorMensagem
    } else
        if (chat_id.value.trim() == "" || chat_id.value.trim() == null || chat_id.value.trim() == undefined) {
            chat_id.focus();
            responseSpan.innerHTML = errorMensagem
        } else
            if (mensagem.value.trim() == "" || mensagem.value.trim() == null || mensagem.value.trim() == undefined) {
                mensagem.focus();
                responseSpan.innerHTML = errorMensagem
            } else {
                responseSpan.innerHTML = ''
                responseSpan.className = "spinner-border text-info"
                sender = true;
                sendMessage(mensagem.value.trim(), botHomologacao.value.trim(), chat_id.value.trim(), sender);
            }
}

function prepareGetUpdates() {
    responseSpan = document.getElementById("form-response");
    botHomologacao = document.getElementById('idBot');
    if (botHomologacao.value.trim() == "" || botHomologacao.value.trim() == null || botHomologacao.value.trim() == undefined) {
        botHomologacao.focus();
        responseSpan.innerHTML = errorMensagem
    } else {
        responseSpan.innerHTML = ''
        responseSpan.className = "spinner-border text-info"
        getUpdates(botHomologacao.value.trim())
    }
}