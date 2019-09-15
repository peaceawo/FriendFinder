$("#submit").on("click", function(event) {
  event.preventDefault();

  var newFriend = {
    name: $("#name")
      .val()
      .trim(),
    photo: $("#photo")
      .val()
      .trim(),
    scores: [
      $("#question1").val(),
      $("#question2").val(),
      $("#question3").val(),
      $("#question4").val(),
      $("#question5").val(),
      $("#question6").val(),
      $("#question7").val(),
      $("#question8").val(),
      $("#question9").val(),
      $("#question10").val()
    ]
  };

  console.log(newFriend);

  //Ajax call for receiving response after POST req

  $.post("/api/friends", newFriend, function(data) {
    //Modal Values
    $("#friendname").text(data.name);
    $(".modal-body").attr("src", data.photo);
    $("#friendModal").modal("show");

    // Clear the form when submitting
    $("#name").val("");
    $("#photo").val("");
    $(".chosen-select").val("");
  });
});
