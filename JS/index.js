let inputName = document.querySelector(".inputNome");
let inputEmail = document.querySelector(".inputEmail");
let inputMessage = document.querySelector(".inputMsg");
let btn = document.querySelector(".container--form--btn");

btn.addEventListener("click", (evt) => {
    evt.stopPropagation()
    let name = inputName.value;
    let email = inputEmail.value;
    let message = inputMessage.value;
    if (name === "" || email === "" || message === "") {
        alert("Preencha todos os campos");
    }
    else {
        console.log(`Recebemos um Formulario\n\n nome: ${name}\nE-mail: ${email}\n\na mensagem que ${name} deixou foi a seguinte:\n\n "${message}"`);
    }
})