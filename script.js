function validator() {

    const firstname = document.querySelector ("#first-name")
    const lastname = document.querySelector ("#last-name")
    const email = document.querySelector ("#email-addreass")
    const password = document.querySelector ("#password")
    const messageError = document.querySelector (".message-error")

    firstnameValue = firstname.value
    lastnameValue = lastname.value
    emailValue = email.value
    passwordValue = password.value

    if (firstnameValue === "") {
        firstname.classList.add(".erro")
        messageError.textContent = "This field is required"
    }

    if (lastnameValue === "") {
        lastname.classList.add(".erro")
        messageError.textContent = "This field is required"
    }

    if (emailValue === "") {
        email.classList.add(".erro")
        messageError.textContent = "This field is required"
    }

    if (passwordValue === "") {
        password.classList.add(".erro")
        messageError.textContent = "This field is required"
    }
}