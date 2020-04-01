// business logic
function myFunc(year){

  if ( year % 4 === 0 && year % 400 === 0 )  {
    $("#result").text("True");
  } else if ( year % 4 !== 0 ) {
    $("#result").text("False");
  } else {
    $("#result").text("False");
  }
}



// front end logic
$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    var year = $("input").val();
    myFunc(year);
  });
});