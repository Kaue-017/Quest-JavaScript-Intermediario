const inputs = document.querySelectorAll("input")
const inputSubmit = inputs[4]
const msgAviso = document.getElementsByClassName("aviso")
const msgAvisoH3 = document.querySelector("h3")
inputSubmit.addEventListener("click", function () {
    inputs.forEach((input , index)=> {
        if (input === inputSubmit) {
            return
        }
        if (input.value !== "") {
            input.classList.remove("vazio")
            input.classList.add("preenchido")
            msgAviso[index].innerHTML = ""
        }
        else {
            input.classList.remove("preenchido")
            input.classList.add("vazio")
            msgAviso[index].innerHTML = "campo obrigatório"
        }
        if (inputs[3].classList.contains("vazio")) {
            msgAvisoH3.style.position = "static"
        }
        else {
            msgAvisoH3.style.position = "relative"
        }
    })
})
