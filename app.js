//document.querySelectorAll(".checkbox")
console.log("page loaded");
// pauses funcion-binding until page is loaded
window.onload=function() {
  document.querySelector(".reset-button").onclick=resetButtonClicked;
}

function resetButtonClicked() {
  var result = window.confirm("Reset Checklist?");
  console.log("button clicked");

  if (result === true) {
    var checkboxElements = document.querySelectorAll(".checkbox");
    for (i = 0; i < checkboxElements.length; i++) {
      var checkboxElement = checkboxElements[i];
      checkboxElement.checked = false;

    //  console.log("checkboxElement:", checkboxElement);
    }
  }
}
