$(document).ready(() => {
  $("#input-form").submit(event, () => {
    event.preventDefault();
    var choice = $("#dropdown").val();
    console.log(choice);
  });
});
