//This prevents the page from reloading when you press the enter key
$('form').bind("keypress", function(e) {
    if (e.keyCode == 13) {               
      e.preventDefault();
      return false;
    }
  });

  // this loads the tasks when the page is loaded
window.onload = function(){
  document.getElementById("div-9am").innerHTML = JSON.parse(window.localStorage.getItem("9am"));
  $("#div-9am").text = JSON.parse(window.localStorage.getItem("9am"));

  //10
  document.getElementById("div-10am").innerHTML = JSON.parse(window.localStorage.getItem("10am"));
  $("#div-10am").text = JSON.parse(window.localStorage.getItem("10am"));

  //11am
  document.getElementById("div-11am").innerHTML = JSON.parse(window.localStorage.getItem("11am"));
  $("#div-11am").text = JSON.parse(window.localStorage.getItem("11am"));

    //12pm
    document.getElementById("div-12pm").innerHTML = JSON.parse(window.localStorage.getItem("12pm"));
    $("#div-12pm").text = JSON.parse(window.localStorage.getItem("12pm"));

    //1pm
    document.getElementById("div-1pm").innerHTML = JSON.parse(window.localStorage.getItem("1pm"));
    $("#div-1pm").text = JSON.parse(window.localStorage.getItem("1pm"));

    //2pm
    document.getElementById("div-2pm").innerHTML = JSON.parse(window.localStorage.getItem("2pm"));
    $("#div-2pm").text = JSON.parse(window.localStorage.getItem("2pm"));

    //3pm
    document.getElementById("div-3pm").innerHTML = JSON.parse(window.localStorage.getItem("3pm"));
    $("#div-3pm").text = JSON.parse(window.localStorage.getItem("3pm"));

    //4pm
    document.getElementById("div-4pm").innerHTML = JSON.parse(window.localStorage.getItem("4pm"));
    $("#div-4pm").text = JSON.parse(window.localStorage.getItem("4pm"));

   //5pm
   document.getElementById("div-5pm").innerHTML = JSON.parse(window.localStorage.getItem("5pm"));
   $("#div-5pm").text = JSON.parse(window.localStorage.getItem("5pm"));

}

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

document.addEventListener("click", function(e){
  if(e.target && e.target.id == "clear-9am"){
      e.preventDefault();
      document.getElementById("div-9am").innerHTML = "";
      window.localStorage.setItem("9am", JSON.stringify(""));
      // change styling
  }
});




/*                           10                                */ 

  // this submits the 10AM input when enter key is pressed
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
  
  
    // this submits the 10AM input when the save button is pressed
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

  document.addEventListener("click", function(e){
    if(e.target && e.target.id == "clear-10am"){
        e.preventDefault();
        document.getElementById("div-10am").innerHTML = "";
        window.localStorage.setItem("10am", JSON.stringify(""));
        // change styling
    }
  });



  /*                           11 am                                */ 

  // this submits the 11AM input when enter key is pressed
  var enterKey11 = document.getElementById("input-11am");
  enterKey11.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
      event.preventDefault();
      var text11am = $("#input-11am").val()
      window.localStorage.setItem("11am", JSON.stringify(text11am));
      var text11amReturn = JSON.parse(window.localStorage.getItem("11am"));
      var text11am2 = $("#div-11am");
      text11am2.value = text11amReturn;
      document.getElementById("div-11am").innerHTML = text11amReturn;
    }
  });
  
  
    // this submits the 11AM input when the save button is pressed
  document.addEventListener("click", function(e){
      if(e.target && e.target.id == "save-11am"){
        e.preventDefault();
        var text11am = $("#input-11am").val()
        window.localStorage.setItem("11am", JSON.stringify(text11am));
        var text11amReturn = JSON.parse(window.localStorage.getItem("11am"));
        var text11am2 = $("#div-11am");
        text11am2.value = text11amReturn;
        document.getElementById("div-11am").innerHTML = text11amReturn;
      }
  });

  document.addEventListener("click", function(e){
    if(e.target && e.target.id == "clear-11am"){
        e.preventDefault();
        document.getElementById("div-11am").innerHTML = "";
        window.localStorage.setItem("11am", JSON.stringify(""));
        // change styling
    }
  });


  /*                           12pm                                */ 

  // this submits the 12pm input when enter key is pressed
  var enterKey12 = document.getElementById("input-12pm");
  enterKey12.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
     event.preventDefault();
     var text12pm = $("#input-12pm").val()
     window.localStorage.setItem("12pm", JSON.stringify(text12pm));
     var text12pmReturn = JSON.parse(window.localStorage.getItem("12pm"));
     var text12pm2 = $("#div-12pm");
     text12pm2.value = text12pmReturn;
     document.getElementById("div-12pm").innerHTML = text12pmReturn;
    }
  });
  
  
    // this submits the 12pm input when the save button is pressed
  document.addEventListener("click", function(e){
      if(e.target && e.target.id == "save-12pm"){
        e.preventDefault();
        var text12pm = $("#input-12pm").val()
        window.localStorage.setItem("12pm", JSON.stringify(text12pm));
        var text12pmReturn = JSON.parse(window.localStorage.getItem("12pm"));
        var text12pm2 = $("#div-12pm");
        text12pm2.value = text12pmReturn;
        document.getElementById("div-12pm").innerHTML = text12pmReturn;
      }
  });

  document.addEventListener("click", function(e){
    if(e.target && e.target.id == "clear-12pm"){
        e.preventDefault();
        document.getElementById("div-12pm").innerHTML = "";
        window.localStorage.setItem("12pm", JSON.stringify(""));
        // change styling
    }
  });


  
   /*                           1pm                                */ 

  // this submits the 1pm input when enter key is pressed
  var enterKey1 = document.getElementById("input-1pm");
  enterKey1.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
     event.preventDefault();
     var text1pm = $("#input-1pm").val()
     window.localStorage.setItem("1pm", JSON.stringify(text1pm));
     var text1pmReturn = JSON.parse(window.localStorage.getItem("1pm"));
     var text1pm2 = $("#div-1pm");
     text1pm2.value = text1pmReturn;
     document.getElementById("div-1pm").innerHTML = text1pmReturn;
    }
  });
  
  
    // this submits the 1pm input when the save button is pressed
  document.addEventListener("click", function(e){
      if(e.target && e.target.id == "save-1pm"){
        e.preventDefault();
        var text1pm = $("#input-1pm").val()
        window.localStorage.setItem("1pm", JSON.stringify(text1pm));
        var text1pmReturn = JSON.parse(window.localStorage.getItem("1pm"));
        var text1pm2 = $("#div-1pm");
        text1pm2.value = text1pmReturn;
        document.getElementById("div-1pm").innerHTML = text1pmReturn;
      }
  });

  document.addEventListener("click", function(e){
    if(e.target && e.target.id == "clear-1pm"){
        e.preventDefault();
        document.getElementById("div-1pm").innerHTML = "";
        window.localStorage.setItem("1pm", JSON.stringify(""));
        // change styling
    }
  });

    
   /*                           2pm                                */ 

  // this submits the 2pm input when enter key is pressed
  var enterKey2 = document.getElementById("input-2pm");
  enterKey2.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
     event.preventDefault();
     var text2pm = $("#input-2pm").val()
     window.localStorage.setItem("2pm", JSON.stringify(text2pm));
     var text2pmReturn = JSON.parse(window.localStorage.getItem("2pm"));
     var text2pm2 = $("#div-2pm");
     text2pm2.value = text2pmReturn;
     document.getElementById("div-2pm").innerHTML = text2pmReturn;
    }
  });
  
  
    // this submits the 2pm input when the save button is pressed
  document.addEventListener("click", function(e){
      if(e.target && e.target.id == "save-2pm"){
        e.preventDefault();
        var text2pm = $("#input-2pm").val()
        window.localStorage.setItem("2pm", JSON.stringify(text2pm));
        var text2pmReturn = JSON.parse(window.localStorage.getItem("2pm"));
        var text2pm2 = $("#div-2pm");
        text2pm2.value = text2pmReturn;
        document.getElementById("div-2pm").innerHTML = text2pmReturn;
      }
  });

  document.addEventListener("click", function(e){
    if(e.target && e.target.id == "clear-2pm"){
        e.preventDefault();
        document.getElementById("div-2pm").innerHTML = "";
        window.localStorage.setItem("2pm", JSON.stringify(""));
        // change styling
    }
  });


      
   /*                           3pm                                */ 

  // this submits the 3pm input when enter key is pressed
  var enterKey3 = document.getElementById("input-3pm");
  enterKey3.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
     event.preventDefault();
     var text3pm = $("#input-3pm").val()
     window.localStorage.setItem("3pm", JSON.stringify(text3pm));
     var text3pmReturn = JSON.parse(window.localStorage.getItem("3pm"));
     var text3pm2 = $("#div-3pm");
     text3pm2.value = text3pmReturn;
     document.getElementById("div-3pm").innerHTML = text3pmReturn;
    }
  });
  
  
    // this submits the 3pm input when the save button is pressed
  document.addEventListener("click", function(e){
      if(e.target && e.target.id == "save-3pm"){
        e.preventDefault();
        var text3pm = $("#input-3pm").val()
        window.localStorage.setItem("3pm", JSON.stringify(text3pm));
        var text3pmReturn = JSON.parse(window.localStorage.getItem("3pm"));
        var text3pm2 = $("#div-3pm");
        text3pm2.value = text3pmReturn;
        document.getElementById("div-3pm").innerHTML = text3pmReturn;
      }
  });

  document.addEventListener("click", function(e){
    if(e.target && e.target.id == "clear-3pm"){
        e.preventDefault();
        document.getElementById("div-3pm").innerHTML = "";
        window.localStorage.setItem("3pm", JSON.stringify(""));
        // change styling
    }
  });


 /*                           4pm                                */ 

  // this submits the 4pm input when enter key is pressed
  var enterKey4 = document.getElementById("input-4pm");
  enterKey4.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
     event.preventDefault();
     var text4pm = $("#input-4pm").val()
     window.localStorage.setItem("4pm", JSON.stringify(text4pm));
     var text4pmReturn = JSON.parse(window.localStorage.getItem("4pm"));
     var text4pm2 = $("#div-4pm");
     text4pm2.value = text4pmReturn;
     document.getElementById("div-4pm").innerHTML = text4pmReturn;
    }
  });
  
  
    // this submits the 4pm input when the save button is pressed
  document.addEventListener("click", function(e){
      if(e.target && e.target.id == "save-4pm"){
        e.preventDefault();
        var text4pm = $("#input-4pm").val()
        window.localStorage.setItem("4pm", JSON.stringify(text4pm));
        var text4pmReturn = JSON.parse(window.localStorage.getItem("4pm"));
        var text4pm2 = $("#div-4pm");
        text4pm2.value = text4pmReturn;
        document.getElementById("div-4pm").innerHTML = text4pmReturn;
      }
  });

  document.addEventListener("click", function(e){
    if(e.target && e.target.id == "clear-4pm"){
        e.preventDefault();
        document.getElementById("div-4pm").innerHTML = "";
        window.localStorage.setItem("4pm", JSON.stringify(""));
        // change styling
    }
  });

   /*                           5pm                                */ 

  // this submits the 5pm input when enter key is pressed
  var enterKey5 = document.getElementById("input-5pm");
  enterKey5.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
     event.preventDefault();
     var text5pm = $("#input-5pm").val()
     window.localStorage.setItem("5pm", JSON.stringify(text5pm));
     var text5pmReturn = JSON.parse(window.localStorage.getItem("5pm"));
     var text5pm2 = $("#div-5pm");
     text5pm2.value = text5pmReturn;
     document.getElementById("div-5pm").innerHTML = text5pmReturn;
    }
  });
  
  
    // this submits the 5pm input when the save button is pressed
  document.addEventListener("click", function(e){
      if(e.target && e.target.id == "save-5pm"){
        e.preventDefault();
        var text5pm = $("#input-5pm").val()
        window.localStorage.setItem("5pm", JSON.stringify(text5pm));
        var text5pmReturn = JSON.parse(window.localStorage.getItem("5pm"));
        var text5pm2 = $("#div-5pm");
        text5pm2.value = text5pmReturn;
        document.getElementById("div-5pm").innerHTML = text5pmReturn;
      }
  });

  document.addEventListener("click", function(e){
    if(e.target && e.target.id == "clear-5pm"){
        e.preventDefault();
        document.getElementById("div-5pm").innerHTML = "";
        window.localStorage.setItem("5pm", JSON.stringify(""));
        // change styling
    }
  });

//END OF TABLE FUNCTIONS


  document.addEventListener("click", function(e){
    if(e.target && e.target.id == "clear-all"){
        e.preventDefault();
        document.getElementById("div-9am").innerHTML = "";
        window.localStorage.setItem("9am", JSON.stringify(""));

        document.getElementById("div-10am").innerHTML = "";
        window.localStorage.setItem("10am", JSON.stringify(""));

        document.getElementById("div-11am").innerHTML = "";
        window.localStorage.setItem("11am", JSON.stringify(""));

        document.getElementById("div-12pm").innerHTML = "";
        window.localStorage.setItem("12pm", JSON.stringify(""));

        document.getElementById("div-1pm").innerHTML = "";
        window.localStorage.setItem("1pm", JSON.stringify(""));

        document.getElementById("div-2pm").innerHTML = "";
        window.localStorage.setItem("2pm", JSON.stringify(""));

        document.getElementById("div-3pm").innerHTML = "";
        window.localStorage.setItem("3pm", JSON.stringify(""));

        document.getElementById("div-4pm").innerHTML = "";
        window.localStorage.setItem("4pm", JSON.stringify(""));

        document.getElementById("div-5pm").innerHTML = "";
        window.localStorage.setItem("5pm", JSON.stringify(""));
        // change styling
    }
  });


//Jumbotron time display
 var time = moment().format("MMMM Do YY, h:mm a"); 
document.getElementById("currentDay").innerHTML = time;

//setting the background color based on time




//if id unix code is equal to curremt time
//set class to .present

//else if les than current time
// set class to past

//else class set to futuer


var currentTime = moment().format("h");
var currentPM = moment().format("a");
var pm = "pm"
var am = "am"

console.log(currentPM)


function setStyleOnTime5pm() {
  var time5Pm = document.getElementById("5pm").getAttribute("data-time");

  if (currentTime < time5Pm) {
    document.getElementById("5pm").setAttribute("class", "future");
  } else if (currentTime > time5Pm) {
    document.getElementById("5pm").setAttribute("class", "past");
  } else if (currentTime == time5Pm) {
    document.getElementById("5pm").setAttribute("class", "present");
  } else {
    document.getElementById("5pm").setAttribute("class", "past");
  }
}



function setStyleOnTime4pm() {
  var time4Pm = document.getElementById("4pm").getAttribute("data-time");

  if (currentTime < time4Pm) {
    document.getElementById("4pm").setAttribute("class", "future");
  } else if (currentTime > time4Pm) {
    document.getElementById("4pm").setAttribute("class", "past");
  } else if (currentTime == time4Pm) {
    document.getElementById("4pm").setAttribute("class", "present");
  } else {
    document.getElementById("4pm").setAttribute("class", "past");
  }
}


function setStyleOnTime3pm() {
  var time3Pm = document.getElementById("3pm").getAttribute("data-time");
  if (currentTime < time3Pm) {
    document.getElementById("3pm").setAttribute("class", "future");
  } else if (currentTime > time3Pm) {
    document.getElementById("3pm").setAttribute("class", "past");
  } else if (currentTime == time3Pm) {
    document.getElementById("3pm").setAttribute("class", "present");
  } else {
    document.getElementById("3pm").setAttribute("class", "past");
  }
}


function setStyleOnTime2pm() {
  var time2Pm = document.getElementById("2pm").getAttribute("data-time");

  if (currentTime < time2Pm) {
    document.getElementById("2pm").setAttribute("class", "future");
  } else if (currentTime > time2Pm) {
    document.getElementById("2pm").setAttribute("class", "past");
  } else if (currentTime == time2Pm) {
    document.getElementById("2pm").setAttribute("class", "present");
  } else {
    document.getElementById("2pm").setAttribute("class", "past");
  }
}

function setStyleOnTime1pm() {
  var time1Pm = document.getElementById("1pm").getAttribute("data-time");

  if (currentTime > time1Pm && currentPM == am) {
    document.getElementById("1pm").setAttribute("class", "future");
  } else if (currentTime > time1Pm) {
    document.getElementById("1pm").setAttribute("class", "past");
  }else if (currentTime == time1Pm) {
    document.getElementById("1pm").setAttribute("class", "present");
  } 
}

function setStyleOnTime12pm() {
  var time12Pm = document.getElementById("12pm").getAttribute("data-time");

  if (currentTime < time12Pm && currentPM !==  pm) {
    document.getElementById("12pm").setAttribute("class", "future");
  } else if (currentTime > time12Pm) {
    document.getElementById("12pm").setAttribute("class", "past");
  } else if (currentTime == time12Pm) {
    document.getElementById("12pm").setAttribute("class", "present");
  } else {
    document.getElementById("12pm").setAttribute("class", "past");
  }
}


function setStyleOnTime11am() {
  var time11am = document.getElementById("11am").getAttribute("data-time");

  if (currentTime < time11am && currentPM !==  pm) {
    document.getElementById("11am").setAttribute("class", "future");
  } else if (currentTime > time11am) {
    document.getElementById("11am").setAttribute("class", "past");
  } else if (currentTime == time11am) {
    document.getElementById("11am").setAttribute("class", "present");
  } else {
    document.getElementById("11am").setAttribute("class", "past");
  }
}


function setStyleOnTime10am() {
  var time10am = document.getElementById("10am").getAttribute("data-time");

  console.log(currentTime);
  console.log(time10am);
  if (currentTime < time10am && currentPM !==  pm) {
    document.getElementById("10am").setAttribute("class", "future");
  } else if (currentTime > time10am) {
    document.getElementById("10am").setAttribute("class", "past");
  } else if (currentTime == time10am) {
    document.getElementById("10am").setAttribute("class", "present");
  } else {
    document.getElementById("10am").setAttribute("class", "past");
  }
}


function setStyleOnTime09am() {
  var time9am = document.getElementById("09am").getAttribute("data-time");
  
  if (currentTime < time9am  && !currentTime == time9am) {
    document.getElementById("09am").setAttribute("class", "future");
  } else if (currentTime > time9am) {
    document.getElementById("09am").setAttribute("class", "past");
  } else if (currentTime == time9am) {
    document.getElementById("09am").setAttribute("class", "present");
  } else {
    document.getElementById("09am").setAttribute("class", "past");
  }
}








setStyleOnTime5pm();
setStyleOnTime4pm();
setStyleOnTime3pm();
setStyleOnTime2pm();
setStyleOnTime1pm();
setStyleOnTime09am();
setStyleOnTime12pm();
setStyleOnTime11am();
setStyleOnTime10am();
