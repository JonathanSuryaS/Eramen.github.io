
function submit() {
    regisform = document.getElementById("form")
    usernames = document.getElementById("usernames")
    emails = document.getElementById("emails")
    phonenumbers = document.getElementById("phonenumbers")
    discussions = document.getElementById("discussions")
    dryramen = document.getElementById("dryramen")
    ramen = document.getElementById("ramen")
    agree = document.getElementById("agree")
    error = document.getElementById("error")

    if (usernames.value.length < 5 || usernames.value.length == 0) {
        if (usernames.value.length == 0) {
            error.innerHTML = "Username must be filled"
        } else if (usernames.value.length < 5) {
            error.innerHTML = "Username character must be at least 5 character"
        }
    } else if (emails.value.length == 0 || !emails.value.endsWith("@gmail.com")) {
        if (emails.value.length == 0) {
            error.innerHTML = "Email must be filled"
        } else if (!emails.value.endsWith("@gmail.com")) {
            error.innerHTML = "Emails must end with '@gmail.com'"
        }
    } else if (isNaN(phonenumbers.value) || phonenumbers.value.length < 10) {
        if(phonenumbers.value.length == 0){
            error.innerHTML = "Phonenumber must be filled"
        }else if (isNaN(phonenumbers.value)){
            error.innerHTML = "Phonenumber must be numeric"
        }else error.innerHTML = "Phonenumber must be at least 10 character"
    } else if (discussions.value.length < 10 || discussions.value.length == 0) {
        if (discussions.value.length == 0)error.innerHTML = "Discussion topic must be filled"
        else error.innerHTML = "Discussion topic must be at least 10 character"
    } else if (!(dryramen.checked || ramen.checked)) {
        error.innerHTML = "You must choose between dry ramen or ramen"
    } else if (!(agree.checked)) {
        error.innerHTML = "You must agree to subscribe to our newsletter in order to continue"
    }
    else {
        error.innerHTML = ""
        alert("Succesful")
        regisform.submit()
    }
}


