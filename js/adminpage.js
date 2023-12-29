document.getElementById('name').textContent = localStorage.getItem('name');
            document.getElementById('email').textContent = localStorage.getItem('email');
            document.getElementById('mobile').textContent = localStorage.getItem('mobile');
            document.getElementById('doctor').textContent = localStorage.getItem('doctor');
            document.getElementById('date1').textContent = localStorage.getItem('date1');
            document.getElementById('time1').textContent = localStorage.getItem('time1');
            document.getElementById('problem').textContent = localStorage.getItem('problem');
            
  const existingAppointments = JSON.parse(localStorage.getItem('appointments')) || [];
            const urlParams = new URLSearchParams(window.location.search);
            const appointmentNumber = urlParams.get('appointmentNumber');
            document.getElementById('appointmentNumber').textContent = appointmentNumber;
