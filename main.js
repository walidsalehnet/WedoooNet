// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDhd3l_1q-gNEeihQQY-5fpRvV9vCZgMYA",
    authDomain: "wedoo7.firebaseapp.com",
    projectId: "wedoo7",
    storageBucket: "wedoo7.firebasestorage.app",
    messagingSenderId: "176039023490",
    appId: "1:176039023490:web:693f81466bd00a8767f59b",
    measurementId: "G-Y3TLQ3CKYJ"
  };

// Sign Up function
function signUp() {
    const name = document.getElementById("name").value; // الحصول على الاسم
    const phone = document.getElementById("phone").value; // الحصول على رقم الهاتف
    const password = document.getElementById("password").value;

    if (!name || !phone || !password) {
        Swal.fire("Error", "Please fill out all fields!", "error");
        return;
    }

    // تسجيل الحساب باستخدام الهاتف
    firebase.auth().createUserWithEmailAndPassword(phone + "@example.com", password)
        .then((userCredential) => {
            const user = userCredential.user;
            user.updateProfile({
                displayName: name // حفظ الاسم كـ displayName
            }).then(() => {
                Swal.fire("Success", "Account created successfully!", "success");
            });
        })
        .catch((error) => {
            Swal.fire("Error", error.message, "error");
        });
}

// Login function
function login() {
    const phone = document.getElementById('phone').value;
    const password = document.getElementById('password').value;
    firebase.auth().signInWithEmailAndPassword(phone + "@example.com", password)
        .then((userCredential) => {
            Swal.fire({
                title: 'Welcome!',
                icon: 'success',
                confirmButtonText: 'Continue'
            }).then(() => {
                window.location.href = 'profile2.html';
            });
        })
        .catch((error) => {
            Swal.fire({
                title: 'Error!',
                text: error.message,
                icon: 'error',
                confirmButtonText: 'OK'
            });
        });
}

// Profile and Logout function
firebase.auth().onAuthStateChanged((user) => {
    if (user) {
        // Display username and email
        document.getElementById('user-username').textContent = user.displayName || 'Unknown';
        document.getElementById('user-email').textContent = user.email;
    } else {
        // If no user is signed in, redirect to login page
        if (window.location.pathname.includes('profile2.html')) {
            window.location.href = 'login.html';
        }
    }
});

function logout() {
    firebase.auth().signOut().then(() => {
        // Redirect to login page after successful logout
        window.location.href = 'login.html';
    }).catch((error) => {
        Swal.fire({
            title: 'Error!',
            text: error.message,
            icon: 'error',
            confirmButtonText: 'OK'
        });
    });
}
