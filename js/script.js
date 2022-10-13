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
    label.innerHTML = label.getAttribute("value");

    // Reestiliza a label e a input box
    label.style.color = "#101010";

    inputBox.style.backgroundColor = "#E8E8E8";
    inputBox.style.border = "2px solid #E8E8E8";
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
    label.innerHTML = label.getAttribute("value");

    // Reestiliza a label e a input box
    label.style.color = "#101010";

    inputBox.style.backgroundColor = "#E8E8E8";
    inputBox.style.border = "2px solid #E8E8E8";
}

function invalidCPF(errorMessage){
    // Acessa os elementos do formulário
    var label = document.getElementById("user_cpf_label");
    var inputBox = document.getElementById("user_cpf");

    // Imprime mensagens de erro ao usuário
    inputBox.setCustomValidity(errorMessage);
    console.log("CPF inválida: ", errorMessage);

    // Altera o conteúdo da label
    label.innerHTML = "CPF Inválido";

    // Reestiliza a label e a input box
    label.style.color = "#F95622";

    inputBox.style.backgroundColor = "#DFB7B7";
    inputBox.style.border = "2px solid #F95622";
}

function validCPF(){
    // Acessa os elementos do formulário
    var label = document.getElementById("user_cpf_label");
    var inputBox = document.getElementById("user_cpf");

    // Imprime mensagens de erro ao usuário
    inputBox.setCustomValidity("");
    console.log("CPF válido!");

    // Altera o conteúdo da label
    label.innerHTML = label.getAttribute("value");

    // Reestiliza a label e a input box
    label.style.color = "#101010";

    inputBox.style.backgroundColor = "#E8E8E8";
    inputBox.style.border = "2px solid #E8E8E8";
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

function validateCPF(input) {
    CPFValue = getValue(input);

    if (CPFValue === "") {
        return "É necessario preencher esse campo"
    }

    var trimmedCPFValue = CPFValue.replace(/\D+/g, '');

    // Valida se o CPF tem o comprimento esperado (11 dígitos numéricos)

    if (trimmedCPFValue.length != 11){
        return "O CPF não contém o número correto de dígitos"
    }

    // Valida o CPF através do primeiro dígito verificador

    var validation_first_digit = 0;
    var offset = 10;
    for(let i=0; i<9; i++){
        validation_first_digit += trimmedCPFValue[i] * offset;
        offset--;
    }

    validation_first_digit = (validation_first_digit*10)%11;

    if (validation_first_digit != trimmedCPFValue[9]){
        return "O CPF informado não é válido"
    }

    // Valida o CPF através do segundo dígito verificador

    var validation_second_digit = 0;
    var offset = 11;
    for(let i=0; i<10; i++){
        validation_second_digit += trimmedCPFValue[i] * offset;
        offset--;
    }

    validation_second_digit = (validation_second_digit*10)%11;

    if (validation_second_digit != trimmedCPFValue[10]){
        return "O CPF informado não é válido"
    }

    // Valida o caso de um CPF com todos os dígitos iguais

    var isValid = false;

    for (let i=0; i<10; i++) {
        if (trimmedCPFValue[i] != trimmedCPFValue[i + 1]){
            isValid = true;
            break;   
        }
    }

    if (!isValid){
        return "O CPF informado não é válido"
    }

    
    if (trimmedCPFValue.length != 11) {
        return "O CPF informado não é válido"
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

function checkCPF() {
    var inputBox = document.getElementById("user_cpf");

    CPFValid = validateCPF(inputBox);

    if (CPFValid === "OK") {
        validCPF();
    } else {
        invalidCPF(CPFValid);
    }
}

function cpfMask(i) {

    var v = i.value;

    if (isNaN(v[v.length - 1])) { // impede entrar outro caractere que não seja número
        i.value = v.substring(0, v.length - 1);
        return;
    }

    i.setAttribute("maxlength", "14");
    if (v.length == 3 || v.length == 7) i.value += ".";
    if (v.length == 11) i.value += "-";

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