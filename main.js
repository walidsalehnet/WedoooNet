// Updated Firebase configuration
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

// Login function using phone number
function login() {
    const phoneNumber = document.getElementById('phone-number').value;
    const password = document.getElementById('password').value;

    // Example phone authentication
    firebase.auth().signInWithEmailAndPassword(`${phoneNumber}@phone.auth`, password)
        .then(() => {
            Swal.fire({
                title: '😊 نورت ي رفيقي ',
                icon: 'تم ',
                confirmButtonText: 'استمرار'
            }).then(() => {
                window.location.href = 'index1.html';
            });
        })
        .catch((error) => {
            Swal.fire({
                title: '😢 حدث خطأ ',
                title: '😢 الرقم او كلمة االسر غلط     ',
                confirmButtonText: 'تم'
            });
        });
}

// Sign-Up function using phone number and full name
function signUp() {
    const fullName = document.getElementById('full-name').value;
    const phoneNumber = document.getElementById('phone-number').value;
    const password = document.getElementById('password').value;

    firebase.auth().createUserWithEmailAndPassword(`${phoneNumber}.auth`, password)
        .then((userCredential) => {
            const user = userCredential.user;
            return user.updateProfile({ displayName: fullName });
        })
        .then(() => {
            Swal.fire({
                title: '😇 تم انشاء حسابك ي صديقي ',
                icon: 'تم بنجاح ',
                confirmButtonText: 'استمرار'
            }).then(() => {
                window.location.href = 'index1.html';
            });
        })
        .catch((error) => {
            Swal.fire({
                title: '😢 حدث خطأ ',
                title: '😢  موجود حساب بالرقم ده ي صديقي     ',
                confirmButtonText: 'تم'
            });
        });
}
