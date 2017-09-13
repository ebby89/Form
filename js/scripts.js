$(document).ready(function() {
  $("#formOne").submit(function(event) {
    var recipient = $("input#person1").val();

    $(".person1").text(recipient);

    $("#story").show();

    event.preventDefault();
  });


  $("#formTwo").submit(function(event){
    var yell = $("input#sentence").val().toUpperCase();
    var whisp = $("input#whisper").val().toLowerCase();
    var changing = $("input#changing").val();

    $(".sentence").text(yell);
    $(".whisper").text(whisp);
    $(".changing").text(changing);

    event.preventDefault();
  });
});
