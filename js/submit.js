  $(document).ready(function(){
    console.log("Document ready!");

    $("#date1").datetimepicker();
    $("#time1").datetimepicker();

    $("#submit").click(function() {
      console.log("Button clicked!");

      var fullName = $("#name").val();
      var emailAddress = $("#email").val();
      var mobileNumber = $("#mobile").val();
      var doctor = $("#doctor").val();
      var appointmentDate = $("#date1").val();
      var appointmentTime = $("#time1").val();
      var problem = $("#problem").val();
          
      var appointment = {
        fullName: fullName,
        emailAddress: emailAddress,
        mobileNumber: mobileNumber,
        doctor: doctor,
        appointmentDate: appointmentDate,
        appointmentTime: appointmentTime,
        problem: problem,
      };
          
      var existingAppointments = localStorage.getItem("appointmentList");
      var appointmentList = existingAppointments ? JSON.parse(existingAppointments) : [];
      appointmentList.push(appointment);
      localStorage.setItem("appointmentList", JSON.stringify(appointmentList));
    });
  });
