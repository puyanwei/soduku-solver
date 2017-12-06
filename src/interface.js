$(document).ready(() => {
  $("#input-form").submit(event, () => {
    event.preventDefault();
    var choice = $("#dropdown").val();
    var location = $("#input-cell").val();
    document.getElementsByTagName("td")[location - 1].innerText = choice;
  });
});
