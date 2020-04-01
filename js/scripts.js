$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    var year = $("input").val();
    console.log(year);
  });
});