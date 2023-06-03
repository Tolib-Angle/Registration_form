var unlockRegBtn = { name: false, surname: false, email: false, password: false, date: false};

function passwordView(){
    let password = document.getElementById("password_input");
    let repeat_password = document.getElementById("repeat_password_input");
    if(password.type == "password"){
        password.type = "text";
        repeat_password.type = "text";
    } 
    else{
        password.type = "password";
        repeat_password.type = "password";
    }
}

function checkBirthDate(){
    let date = document.getElementsByName("birth_date")[0];
    let err = document.getElementById("birth_date_block");
    let year = Number(date.value.substr(0,4));
    if(date.value.length == 0 ||  2023 - year < 18){
        err.style.color = "#ec6e6e";
        date.style.background = "#ec6e6e";
        unlockRegBtn.date = false;
    }else{
        err.style.color = "#eeeeee";
        date.style.background = "#eeeeee";
        unlockRegBtn.date = true;
    }
    unlockButton();
}

function checkName(){
    let name = document.getElementById("name");
    let err = document.getElementById("incorrect_name");
    if(isEmpty(name.value) || !checkNameSurname(name.value)){
        name.style.background = "#ec6e6e";
        err.textContent = "Имя не может содержать цифр или менее 2 символов!";
        unlockRegBtn.name = false;
    }else{
        err.textContent = "";
        name.style.background = "#eeeeee";
        unlockRegBtn.name = true;
    }
    unlockButton();
}

function checkSurname(){
    let surname = document.getElementById("surname");
    let err = document.getElementById("incorrect_surname");
    if(isEmpty(surname.value) || !checkNameSurname(surname.value)){
        surname.style.background = "#ec6e6e";
        err.textContent = "Фамилия не может содержать цифр или менее 2 символов!";
        unlockRegBtn.surname = false;
    }else{
        err.textContent = "";
        surname.style.background = "#eeeeee";
        unlockRegBtn.surname = true;
    }
    unlockButton();
}

function checkEmail(){
    let email = document.getElementById("email");
    let err = document.getElementById("incorrect_email");
    if(isEmpty(email.value) || !checkEmailCorrectInput(email.value)){
        email.style.background = "#ec6e6e";
        err.textContent = "Некорректная почта!";
        unlockRegBtn.email = false;
    }else{
        err.textContent = "";
        email.style.background = "#eeeeee";
        unlockRegBtn.email = true;
    }
    unlockButton();
}

function checkPassword2(){
    checkPassword();
}

function checkPassword(){
    let pass1 = document.getElementById("password_input");
    let pass2 = document.getElementById("repeat_password_input");
    let err = document.getElementById("incorrect_password");
    if(isEmpty(pass1.value) || isEmpty(pass2.value) || !checkPasswordForComplexity(pass1.value)){
        pass1.style.background = "#ec6e6e";
        pass2.style.background = "#ec6e6e";
        err.textContent = "Пароль должен содержать минимум одну цифру, по одной заглавной и строчную буквы и один символ!";
        unlockRegBtn.password = false;
    }else{
        if(pass1.value != pass2.value){
            pass1.style.background = "#ec6e6e";
            pass2.style.background = "#ec6e6e";
            err.textContent = "Пароль не совпадает с подтверждением!";
            unlockRegBtn.password = false;
        }else{
            err.textContent = "";
            pass1.style.background = "#eeeeee";
            pass2.style.background = "#eeeeee";
            unlockRegBtn.password = true;
        }
    }
    unlockButton();
}

function isEmpty(str){
    for (var i = 0; i < str.length; i++)
      if (" " != str.charAt(i))
          return false;
    return true;
}

function checkNameSurname(name){
    return /^[a-zA-Z]{2,}|[а-яёА-ЯЁ]{2,}$/.test(name);
}

function checkEmailCorrectInput(email){
    return /^((([0-9A-Za-z]{1}[-0-9A-z\.]{1,}[0-9A-Za-z]{1})|([0-9А-Яа-я]{1}[-0-9А-я\.]{1,}[0-9А-Яа-я]{1}))@([-0-9A-Za-z]{1,}\.){1,2}[-A-Za-z]{2,})$/.test(email);
}

function checkPasswordForComplexity(password){
    return /(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{8,}/.test(password);
}

function unlockButton(){
    if(unlockRegBtn.name && unlockRegBtn.surname && unlockRegBtn.email && unlockRegBtn.password && unlockRegBtn.date)
        document.getElementsByName("btn_reg").disabled = false;
}