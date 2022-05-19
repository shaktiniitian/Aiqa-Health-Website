function lead() {
  $(".loader").show();
  $(".callback").hide();
  $(".danger").hide();

  var myKeyVals = {
    name: $("#name").val(),
    email: $("#email").val(),
    mobile: $("#mobile").val(),
    type: "business",
  };
  $.ajax({
    type: "POST",
    url: "https://aiqahealth.doctoroncall.org/api/lead",
    data: myKeyVals,
    dataType: "text",
    success: function (resultData) {
      $("#myModal").modal("show");
      setTimeout(function () {
        $("#myModal").modal("hide");
        $("#contactForm input").val("");
      }, 3000);
      $(".loader").hide();
      $(".callback").show();
      $(".success").show();
    },
    error: function (error, textStatus, errorThrown) {
      // var response = JSON.parse(error.responseText);
      // response = response.message;
      $(".danger").show();
      $(".loader").hide();
      $(".callback").show();
    },
  });
}

$.validator.setDefaults({
  submitHandler: function () {
    $(".callback").hide();
    lead();
  },
});

$().ready(function () {
  $(".loader").hide();
  $(".success").hide();
  $(".danger").hide();

  $("#contactForm").validate({
    rules: {
      website: "required",
      name: {
        required: true,
        minlength: 3,
      },
      email: {
        required: true,
        minlength: 2,
      },

      mobile: {
        required: true,
        minlength: 10,
        maxlength: 10,
      },
    },
  });
});
