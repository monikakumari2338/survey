document.getElementById("login").addEventListener("click", makerequest);
document.getElementById("login").addEventListener("click", validation);

var x = document.getElementById('email-err');
var y = document.getElementById('pass-err');
var z = document.getElementById('empty');

function validation(e) {
    var error1 = document.getElementById('email').value;
    var error2 = document.getElementById('password').value;

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
        let email = document.getElementById("email").value
        let password = document.getElementById("password").value

        if (email.length == 0 || password.length == 0) {
            return false;
        }
        else {
            const myInit = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email: email, password: password })
            }
            const res = await fetch('http://localhost:8084/api/signin', myInit)
            if (res.status == 400) {
                z.innerHTML = "User doesn't exist";
                document.getElementById('empty').style.color = 'red';
            }
            if (res.status == 401) {
                z.innerHTML = "Email and Password not matched";
                document.getElementById('empty').style.color = 'red';
            }
            // if (res.status == 200) {
            //     window.location.href = 'home';
            // }
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
