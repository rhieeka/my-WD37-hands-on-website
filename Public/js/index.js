function myForm() {
  alert("Login Successful!");
}


function myPassword() {
  alert("Password Reset Successful!");
}


// loader
$(document).ready(function () {
  setTimeout(() => {
    $(".loader").remove();
  }, 5000); 
});

// spinner
$("a[href='#top']").click(function() {
  $("html, body").animate({ scrollTop: 0 }, "smooth");
  return false;
<<<<<<< HEAD
});
=======
});
>>>>>>> 77ee357a5c1667e05aad148a5e2ee59dcf464f71
