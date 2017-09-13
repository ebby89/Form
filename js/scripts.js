$(document).ready(function() {
  $("#formOne").submit(function(event) {
    var recipient = $("input#person1").val();

    $(".person1").text(recipient);

    $("#story").show();

    event.preventDefault();
  });
});
