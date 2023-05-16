function validaFirstName(){
    let value = document.forms["form"]["firstName"].value;
    let element = document.querySelector('.firstName');
    if (value.length < 5){
        document.getElementById("errorFirstName").innerHTML = "Mínimo de 5 dígitos";
        element.style.cssText  = "border-style: solid;border-width: 3px;border-color: red;";

    } else {
        document.getElementById("errorFirstName").innerHTML = "";
        element.style.cssText = ""
    }
}

function validaSecondName(){
    let value = document.forms["form"]["secondName"].value;
    let element = document.querySelector('.secondName');
    if (value.length < 5){
        document.getElementById("errorSecondName").innerHTML = "Mínimo de 5 dígitos"
        element.style.cssText  = "border-style: solid;border-width: 3px;border-color: red;";
    } else {
        document.getElementById("errorSecondName").innerHTML = ""
        element.style.cssText = ""
    }
}

function validaEmail(){
    let value = document.forms["form"]["email"].value;
    let element = document.querySelector('.email');
    if (value.length < 5){
        document.getElementById("errorEmail").innerHTML = "Mínimo de 5 dígitos"
        element.style.cssText  = "border-style: solid;border-width: 3px;border-color: red;";
    } else if(!value.includes("@")){
        document.getElementById("errorEmail").innerHTML = "O caracter @ é necessário"
        element.style.cssText  = "border-style: solid;border-width: 3px;border-color: red;";
    } else {
        document.getElementById("errorEmail").innerHTML = ""
        element.style.cssText  = "";
    }
}

function validaPassword(){
    let value = document.forms["form"]["password"].value;
    let element = document.querySelector('.password');
    if(value.length < 6 || value.length > 8){
        document.getElementById("errorPassword").innerHTML = "A senha deve ter entre 6 e 8 caracteres"
        element.style.cssText  = "border-style: solid;border-width: 3px;border-color: red;";
    } else {
        document.getElementById("errorPassword").innerHTML = ""
        element.style.cssText  = "";
    }
}

function validaConfirmPassword(){
    let password = document.forms["form"]["password"].value;
    let confirmPassword = document.forms["form"]["confirmPassword"].value;

    if( password != confirmPassword){
        document.getElementById("errorConfirmPassword").innerHTML = "As senhas devem ser iguais"
    } else {
        document.getElementById("errorConfirmPassword").innerHTML = ""
    }
}
