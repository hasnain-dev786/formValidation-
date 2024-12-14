

function submitData() {

    let name = document.getElementById("name").value
    let email = document.getElementById("email").value
    let password = document.getElementById("password").value


    if (name == "" || email == "" || password == "") {
        alert("Please Fill out All values")
    }
    else {
        let userData = {
            myname: name,
            myemail: email,
            mypass: password
        }

        console.log(userData);

        document.getElementById("name").value = ""
        document.getElementById("email").value = ""
        document.getElementById("password").value = ""

    }



}