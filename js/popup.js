  document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    const warningPopup = document.getElementById('warningPopup');
    const successPopup = document.getElementById('successPopup');
    const passwordInput = document.getElementById('password');
    const confirmPasswordInput = document.getElementById('confirmpassword');

    form.addEventListener('submit', function(event) {
      if (passwordInput.value !== confirmPasswordInput.value) {
        event.preventDefault();

        warningPopup.style.display = 'block';

        setTimeout(function() {
          warningPopup.style.display = 'none';
        }, 5000);
      } else {
        successPopup.style.display = 'block';

        setTimeout(function() {
          window.location.href = 'index.html';
        }, 3000);

        event.preventDefault();
      }
    });
  });
