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