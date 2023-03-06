document.getElementById("reg").addEventListener("click", makerequest);
document.getElementById("reg").addEventListener("click", validation);

var x = document.getElementById('email-err');
var y = document.getElementById('pass-err');
var a = document.getElementById('email-err');
var b = document.getElementById('pass-err');
var z = document.getElementById('empty');

function validation(e) {
    var error1 = document.getElementById('email').value;
    var error2 = document.getElementById('password').value;
    var error3 = document.getElementById('email').value;
    var error4 = document.getElementById('password').value;

    if (error1.length == 0) {
        x.innerHTML = "Email is required";
        document.getElementById('email-err').style.color = 'red';
        return false;
    }
    if (error2.length == 0) {
        y.innerHTML = "Password is required";
        document.getElementById('pass-err').style.color = 'red';

        return false;
    }
    if (error1.length == 0) {
        x.innerHTML = "Email is required";
        document.getElementById('email-err').style.color = 'red';
        return false;
    }
    if (error2.length == 0) {
        y.innerHTML = "Password is required";
        document.getElementById('pass-err').style.color = 'red';

        return false;
    }

}
async function makerequest(e) {
    e.preventDefault()
    try {
        console.log("Button Clicked")
        let fname = document.getElementById("fname").value
        let lname = document.getElementById("lname").value
        let email = document.getElementById("email").value
        let password = document.getElementById("password").value

        if (email.length == 0 || password.length == 0 || fname.length == 0 || lname.length == 0) {
            return false;
        }
        else {

            const myInit = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ name: fname, lastname: lname, email: email, password: password })
            }
            const res = await fetch('http://localhost:8084/api/signup', myInit)

            if (res.status == 200) {
                window.location.href = '/home';
            }
            if (res.status != 200) {
                throw Error(res.status)
            }

            const data = await res.json()
            console.log(data)

        }
    }
    catch (error) {
        console.log(error)
    }
}    
