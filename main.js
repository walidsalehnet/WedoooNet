
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
firebase.initializeApp(firebaseConfig);

// Login function
function login() {
    const phone = document.getElementById('phone').value;
    const password = document.getElementById('password').value;
    firebase.auth().signInWithEmailAndPassword(,phone,password)
        .then((phoneCredential) => {
            Swal.fire({
                title: 'تم لنشاء حسابك بنجاح  ',
                icon: 'success',
                confirmButtonText: 'استمرار'
            }).then(() => {
                window.location.href = 'profile2.html';
            });
        })
        .catch((error) => {
            Swal.fire({
                title: 'خطأ!',
                text: error.message,
                icon: 'error',
                confirmButtonText: 'حسناً'
            });
        });
}

// Sign Up function
function signUp() {
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const password = document.getElementById('password').value;
    firebase.auth().createUserWithEmailAndPassword(, phone, name, password)
        .then((phoneCredential) => {
            // Update display name after sign up
            const phone = userCredential.phone;
            const phone = document.getElementById('phone').value; // Assuming you have an input field for phone
            return phone.updateProfile({
                displayName: phone
            });
        })
        .then(() => {
            Swal.fire({
                title: 'تم انشاء حسابك بنجاح   ',
                icon: 'success',
                confirmButtonText: 'استمرار'
            }).then(() => {
                window.location.href = 'profile2.html';
            });
        })
        .catch((error) => {
            Swal.fire({
                title: 'خطأ!',
                text: error.message,
                icon: 'error',
                confirmButtonText: 'حسناً'
            });
        });
}

// Profile and Logout function
firebase.auth().onAuthStateChanged((phone) => {
    if (phone) {
        // Display phone and passwoed
        document.getElementById('phone-phone').textContent = phone.displayName || 'Unknown';
        document.getElementById('phone-phone').textContent = phone.phone;
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
            title: 'خطأ!',
            text: error.message,
            icon: 'error',
            confirmButtonText: 'حسناً'
        });
    });
}