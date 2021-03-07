//This prevents the page from reloading when you press the enter key
$('form').bind("keypress", function(e) {
    if (e.keyCode == 13) {               
      e.preventDefault();
      return false;
    }
  });

/*                           9                                */ 
  // this submits the 9AM input when enter key is pressed
var enterKey9 = document.getElementById("input-9am");
enterKey9.addEventListener("keyup", function(event) {
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
  $("#div-9am").text = JSON.parse(window.localStorage.getItem("9am"));

  //10
  document.getElementById("div-10am").innerHTML = JSON.parse(window.localStorage.getItem("10am"));
  $("#div-10am").text = JSON.parse(window.localStorage.getItem("10am"));
}


/*                           10                                */ 

  // this submits the 9AM input when enter key is pressed
  var enterKey10 = document.getElementById("input-10am");
  enterKey10.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
     event.preventDefault();
     var text10am = $("#input-10am").val()
     window.localStorage.setItem("10am", JSON.stringify(text10am));
     var text10amReturn = JSON.parse(window.localStorage.getItem("10am"));
     var text10am2 = $("#div-10am");
     text10am2.value = text10amReturn;
     document.getElementById("div-10am").innerHTML = text10amReturn;
    }
  });
  
  
    // this submits the 9AM input when the save button is pressed
  document.addEventListener("click", function(e){
      if(e.target && e.target.id == "save-10am"){
          e.preventDefault();
          var text10am = $("#input-10am").val()
          window.localStorage.setItem("10am", JSON.stringify(text10am));
          var text10amReturn = JSON.parse(window.localStorage.getItem("10am"));
          var text10am2 = $("#div-10am");
          text10am2.value = text10amReturn;
          document.getElementById("div-10am").innerHTML = text10amReturn;
      }
  });
  