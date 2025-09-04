document.getElementById("LoginForm").addEventListener("submit",
function(e){e.preventDefault();

    const LoginEmail =
    document.getElementById("loginEmail").value;
    const LoginPassword =
    document.getElementById("loginPassword").value;

    const storedUser = JSON.parse(localStorage.getItem(LoginEmail));

    if (storedUser && storedUser.password === LoginPassword){
        alert("Login Berhasil"+ storedUser.nama + "!");
    }else {
        alert("email atau password anda salah");
    }
});