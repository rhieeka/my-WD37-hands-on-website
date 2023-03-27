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

// scrollUp
$("a[href='#top']").click(function() {
  $("html, body").animate({ scrollTop: 0 }, "smooth");
  return false;
});
