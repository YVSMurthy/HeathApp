document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("myForm");
    const passwordField = document.getElementById("password");
    const confirmPasswordField = document.getElementById("confirmPassword");
  
    form.addEventListener("submit", function (e) {
  
      const password = passwordField.value;
      const confirmPassword = confirmPasswordField.value;
  
      if (password === confirmPassword) {
        form.submit();
      } else {
        e.preventDefault();
        alert("Passwords do not match");
      }
    });
});
  