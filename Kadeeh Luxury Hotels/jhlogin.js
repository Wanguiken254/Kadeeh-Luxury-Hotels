function showRegisterForm() {
    document.getElementById('loginForm').style.display = 'none';
    document.getElementById('registerForm').style.display = 'block';
}

function showLoginForm() {
    document.getElementById('registerForm').style.display = 'none';
    document.getElementById('loginForm').style.display = 'block';
}

function login() {
    let userEmail = document.getElementById('loginEmail').value;
    let storedUser = localStorage.getItem(userEmail);

    if (storedUser) {
        storedUser = JSON.parse(storedUser);
        
        localStorage.setItem('loggedInUser', storedUser.email);
        
        fetchCustomerInformation(storedUser);

        window.location.href = 'jhindex.html';
    } else {
        alert('User not found. Please register.');
    }
}

function register() {
    let userEmail = document.getElementById('registerEmail').value;
    let userContacts = document.getElementById('registerContacts').value;
    let userAddress = document.getElementById('registerAddress').value;
    let userGender = document.getElementById('registerGender').value;
    let userPassword = document.getElementById('registerPassword').value;

    
    let newUser = {
        email: userEmail,
        contacts: userContacts,
        address: userAddress,
        gender: userGender,
        password: userPassword
    };

    localStorage.setItem(userEmail, JSON.stringify(newUser));

    alert('Registration successful!');

    document.getElementById('registerForm').style.display = 'none';
    document.getElementById('loginForm').style.display = 'block';
}

function fetchCustomerInformation(user) {
    
    console.log('Fetched customer information:', user);
}
