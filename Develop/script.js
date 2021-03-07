//This prevents the page from reloading when you press the enter key
$('form').bind("keypress", function(e) {
    if (e.keyCode == 13) {               
      e.preventDefault();
      return false;
    }
  });


  // this submits the 9AM input when enter key is pressed
var enterKey = document.getElementById("input-9am");
enterKey.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
   event.preventDefault();
   var text9am = $("#input-9am").val()
   window.localStorage.setItem("9am", JSON.stringify(text9am));
   var text9amReturn = JSON.parse(window.localStorage.getItem("9am"));
   var text9am2 = $("#div-9am");
   text9am2.value = text9amReturn;
   document.getElementById("div-9am").innerHTML = text9amReturn;
  }
});


  // this submits the 9AM input when the save button is pressed
document.addEventListener("click", function(e){
    if(e.target && e.target.id == "save-9am"){
        e.preventDefault();
        var text9am = $("#input-9am").val()
        window.localStorage.setItem("9am", JSON.stringify(text9am));
        var text9amReturn = JSON.parse(window.localStorage.getItem("9am"));
        var text9am2 = $("#div-9am");
        text9am2.value = text9amReturn;
        document.getElementById("div-9am").innerHTML = text9amReturn;
    }
});

// this loads the tasks when the page is loaded
window.onload = function(){
  document.getElementById("div-9am").innerHTML = JSON.parse(window.localStorage.getItem("9am"));
  //document.getElementById("input-9am").placeholder = JSON.parse(window.localStorage.getItem("9am"));
  $("#div-9am").text = JSON.parse(window.localStorage.getItem("9am"));
}