document.getElementById("registerform").addEventListener("submit", function(e){
            e.preventDefault();
            const nama = document.getElementById("nama").value;
            const email = document.getElementById("email").value;
            const tanggal = document.getElementById("tanggal").value;
            const nomorhp= document.getElementById("nomorhp").value;
            const password = document.getElementById("password").value;
            
            const user = {
                nama : nama,
                email : email,
                password : password,
                nomorhp : nomorhp,
                tanggal : tanggal,
            };
            localStorage.setItem(email, JSON.stringify(user));

            alert("kamu keren");

            const table = document.getElementById("datatable").getElementsByTagName("tbody")[0];
            const newRow = table.insertRow();

            newRow.insertCell(0).textContent = nama;
            newRow.insertCell(1).textContent = email;
            newRow.insertCell(2).textContent = nomorhp;
            newRow.insertCell(3).textContent = tanggal;
            newRow.insertCell(4).textContent = password;
            

            document.getElementById("registerform").reset();
        });