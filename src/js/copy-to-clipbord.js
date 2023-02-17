function copy() {
    let responseSpan = document.getElementById("form-response");
    var textArea = document.createElement("textarea");
    textArea.value = responseSpan.textContent;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand("Copy");
    textArea.remove();
}
