document.addEventListener("DOMContentLoaded", () => {
    // استرجاع بيانات المستخدمين من Local Storage
    let users = JSON.parse(localStorage.getItem("users")) || [];

    // التحقق من بيانات تسجيل الدخول
    const loginButton = document.getElementById("login-button");
    const errorMessage = document.getElementById("error-message");

    loginButton?.addEventListener("click", () => {
        const phone = document.getElementById("login-phone").value;
        const password = document.getElementById("login-password").value;

        // التحقق من صحة البيانات
        const user = users.find((u) => u.phone === phone && u.password === password);

        if (user) {
            // الانتقال إلى الصفحة التالية إذا كانت البيانات صحيحة
            window.location.href = "index2.html";
        } else {
            // عرض رسالة خطأ إذا كانت البيانات غير صحيحة
            errorMessage.style.display = "block";
        }
    });
});
