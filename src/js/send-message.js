async function sendMessage(mensagem, botHomologacao, chat_id, sender) {
    console.log('--> sendMessage')
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
                responseSpan.innerHTML = errorMensagem
            }
        } else {
            responseSpan.className = "form-text"
            responseSpan.innerHTML = errorMensagem
        }
    } else {
        responseSpan.className = "form-text"
        responseSpan.innerHTML = 'Não enviar'
    }
}