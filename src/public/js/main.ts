$(document).ready(function() {
  $(() => {
    $("#password, #password_confirm").on("keyup", function () {
      if ($("#password").val() == "" || $("#password_confirm").val() == "") {
        $("#submit-signup").prop("disabled", true);
        $("#message").hide();
      } else if ($("#password").val() == $("#password_confirm").val()) {
        $("#submit-signup").prop("disabled", false);
        $("#message").show().html("Password Match").css("color", "green");
      } else {
        $("#submit-signup").prop("disabled", true);
        $("#message").show().html("Password do not match").css("color", "red");
      }
    });
  });
});