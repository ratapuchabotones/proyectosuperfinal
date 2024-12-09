const loginForm = document.getElementById('loginForm');

loginForm.addEventListener('submit', function (event) {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

   
    const storedEmail = localStorage.getItem('correo');
    const storedPassword = localStorage.getItem('contraseña');

    if (email === storedEmail && password === storedPassword) {
       
        window.location = 'index3.html'; 
    } else {
        alert('Correo o contraseña incorrectos');
    }
});
