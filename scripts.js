document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    let email = document.getElementById('email');
    let password = document.getElementById('password');
    
    if (!email.value.includes('@')) {
        email.classList.add('is-invalid');
    } else {
        email.classList.remove('is-invalid');
    }
    
    if (password.value.length < 6) {
        password.classList.add('is-invalid');
    } else {
        password.classList.remove('is-invalid');
    }
    
    if (email.checkValidity() && password.checkValidity()) {
        // Perform login action
        alert('Login successful!');
    }
});
