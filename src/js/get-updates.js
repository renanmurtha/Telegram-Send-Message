
async function getUpdates(botHomologacao) {
    console.log('--> getUpdates')
    let responseSpan = document.getElementById("form-response");
    if (!isNull(urlTelegram) && !isNull(botHomologacao)) {
        let url = urlTelegram + botHomologacao + '/getUpdates'
        axios.get(url).then((response) => {
            responseSpan.className = "form-text text-uppercase text-success-emphasis"
            responseSpan.value = '';
            responseSpan.style.fontSize="15px"
            let allResponse = response.data.result;          
            responseSpan.innerHTML = JSON.stringify(allResponse);

        }).catch((error) => {
            responseSpan.className = "form-text"
            responseSpan.innerHTML = error
        })
    } else {
        responseSpan.className = "form-text"        
        responseSpan.innerHTML = errorMensagem
    }
}


