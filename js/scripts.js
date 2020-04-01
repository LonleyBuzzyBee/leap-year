// business logic
function myFunc(){
  
}








// front end logic
$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    var year = $("input").val();
    myFunc(year);
  });
});