// business logic
function myFunc(year){

  if ( year % 4 === 0)  {
    $("#result").text("true");
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