
// function saveData(){

// }

$('form').bind("keypress", function(e) {
    if (e.keyCode == 13) {               
      e.preventDefault();
      return false;
    }
  });


//enter text
//click save
//text saves to local storage
//text remains on display
//event prevent default
//

document.addEventListener("click", function(e){
    if(e.target && e.target.id == "save-9am"){
        e.preventDefault();
        
        var text9am = $("#input-9am").val()
        
        window.localStorage.setItem("9am", JSON.stringify(text9am));
        var text9amReturn = JSON.parse(window.localStorage.getItem("9am"));
        
        
        var text9am2 = $("#input-9am");
        text9am2.value = text9amReturn;
        console.log(text9amReturn);
    }
});