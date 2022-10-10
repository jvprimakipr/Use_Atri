function invalidEmail(errorMessage) {
    // Acessa os elementos do formulário
    var label = document.getElementById("user_email_label");
    var inputBox = document.getElementById("user_email");

    // Imprime mensagens de erro ao usuário
    inputBox.setCustomValidity(errorMessage);
    console.log("Email inválido: ", errorMessage);

    // Altera o conteúdo da label
    label.innerHTML = "Email Inválido";

    // Reestiliza a label e a input box
    label.style.color = "#F95622";

    inputBox.style.backgroundColor = "#DFB7B7";
    inputBox.style.border = "2px solid #F95622";
}

function validEmail() {
    // Acessa os elementos do formulário
    var label = document.getElementById("user_email_label");
    var inputBox = document.getElementById("user_email");

    // Imprime mensagens de erro ao usuário
    inputBox.setCustomValidity("");
    console.log("Email válido!");

    // Altera o conteúdo da label
    label.innerHTML = "Email";

    // Reestiliza a label e a input box
    label.style.color = "#101010";

    inputBox.style.backgroundColor = "#E8E8E8";
    inputBox.style.border = "2px solid #101010";
}

function invalidPassword(errorMessage) {
    // Acessa os elementos do formulário
    var label = document.getElementById("user_password_label");
    var inputBox = document.getElementById("user_password");

    // Imprime mensagens de erro ao usuário
    inputBox.setCustomValidity(errorMessage);
    console.log("Senha inválida: ", errorMessage);

    // Altera o conteúdo da label
    label.innerHTML = "Senha Inválida";

    // Reestiliza a label e a input box
    label.style.color = "#F95622";

    inputBox.style.backgroundColor = "#DFB7B7";
    inputBox.style.border = "2px solid #F95622";
}

function validPassword() {
    // Acessa os elementos do formulário
    var label = document.getElementById("user_password_label");
    var inputBox = document.getElementById("user_password");

    // Imprime mensagens de erro ao usuário
    inputBox.setCustomValidity("");
    console.log("Senha válida!");

    // Altera o conteúdo da label
    label.innerHTML = "Senha";

    // Reestiliza a label e a input box
    label.style.color = "#101010";

    inputBox.style.backgroundColor = "#E8E8E8";
    inputBox.style.border = "2px solid #101010";
}

function getValue(input) {
    return input.value.trim();
}

function hasValue(input, message) {
    inputValue = input.value.trim();
    if (inputValue === "") {
        return false;
    }
    return true;
}


function validateEmail(input) {
    emailValue = getValue(input);

    const emailRegex = /^[a-zA-Z0-9.a-zA-Z0-9.!#$%&'*+-/=?^_`{|}~]+@[a-zA-Z0-9]+\.[a-zA-Z]+?((?:[a-zA-Z0-9-]{0,253}[a-zA-Z0-9])?)*$/;

    if (emailValue === "") {
        return "É necessario preencher esse campo"
    } else if (!emailRegex.test(emailValue)) {
        return "O email informado não é válido"
    } else {
        return "OK"
    }
}

function validatePassword(input) {
    passwordValue = getValue(input);

    if (passwordValue === "") {
        return "É necessario preencher esse campo"
    } else if (passwordValue.length < 8) {
        return "Sua senha é curta demais para ser válida"
    } else {
        return "OK"
    }
}

function checkEmail() {
    var inputBox = document.getElementById("user_email");
    emailValid = validateEmail(inputBox);

    if (emailValid === "OK") {
        validEmail();
    } else {
        invalidEmail(emailValid);
    }
}

function checkPassword() {
    var inputBox = document.getElementById("user_password");
    passwordValid = validatePassword(inputBox);

    if (passwordValid === "OK") {
        validPassword();
    } else {
        invalidPassword(passwordValid);
    }
}

window.onload = function () {
    const form = document.getElementById('login_form');

    form.addEventListener("submit", function (event) {
        // Stop form submission
        event.preventDefault();

        // Find the input boxes
        var emailInput = form.elements["user_email"];
        var passwordInput = form.elements["user_password"];

        // Validate the form
        let emailValid = validateEmail(emailInput);
        let passwordValid = validatePassword(passwordInput);

        if (emailValid === "OK") {
            validEmail();
        } else {
            invalidEmail(emailValid);
        }

        if (passwordValid === "OK") {
            validPassword();
        } else {
            invalidPassword(passwordValid);
        }

        // if valid, submit the form
        if (passwordValid === "OK" && emailValid === "OK") {
            var successString = "Os dados informados são válidos e podem ser submetidos\n\n\tEmail: " + getValue(emailInput) + "\n\tSenha: " + getValue(passwordInput);
            alert(successString);

            // form.submit();
        }
    });
};