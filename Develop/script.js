//This prevents the page from reloading when you press the enter key
$('form').bind("keypress", function(e) {
    if (e.keyCode == 13) {               
      e.preventDefault();
      return false;
    }
  });

  // this loads the tasks when the page is loaded
window.onload = function(){
  document.getElementById("div-product_1-name").textContent = JSON.parse(window.localStorage.getItem("product1"));
  document.getElementById("div-product_1-quantity").textContent = JSON.parse(window.localStorage.getItem("product1-quantity"));
  



}

/*                           1                                */ 
  // this submits the product name input when enter key is pressed
var enterKey1Name = document.getElementById("input-product_1-name");
enterKey1Name.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
   event.preventDefault();
   var product_1 = $("#input-product_1-name").val()
   window.localStorage.setItem("product1", JSON.stringify(product_1));
   var product1Return = JSON.parse(window.localStorage.getItem("product1"));
   var product1Title = $("#div-product_1-name");
   product1Title.value = product1Return;
   document.getElementById("div-product_1-name").textContent = product1Return;
  }
});


  // this submits the product name input when the save button is pressed
document.addEventListener("click", function(e){
    if(e.target && e.target.id == "save-product_1-name"){
        e.preventDefault();
    var product_1 = $("#input-product_1-name").val()
    window.localStorage.setItem("product1", JSON.stringify(product_1));
    var product1Return = JSON.parse(window.localStorage.getItem("product1"));
    var product1Title = $("#div-product_1-name");
    product1Title.value = product1Return;
    document.getElementById("div-product_1-name").textContent = product1Return;
    }
});


var enterKey1Quantity = document.getElementById("input-product_1-quantity");
enterKey1Quantity.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
   event.preventDefault();
   var product_1Quantity = $("#input-product_1-quantity").val()
   window.localStorage.setItem("product1-quantity", JSON.stringify(product_1Quantity));
   var product1QuantityReturn = JSON.parse(window.localStorage.getItem("product1-quantity"));
   var product1Quantity = $("#div-product_1-quantity");
   product1Quantity.value = product1QuantityReturn;
   document.getElementById("div-product_1-quantity").textContent = product1QuantityReturn;

  }
});


  // this submits the 9AM input when the save button is pressed
document.addEventListener("click", function(e){
    if(e.target && e.target.id == "save-product_1-quantity"){
        e.preventDefault();
        var product_1Quantity = $("#input-product_1-quantity").val()
        window.localStorage.setItem("product1-quantity", JSON.stringify(product_1Quantity));
        var product1QuantityReturn = JSON.parse(window.localStorage.getItem("product1-quantity"));
        var product1Quantity = $("#div-product_1-quantity");
        product1Quantity.value = product1QuantityReturn;
        document.getElementById("div-product_1-quantity").textContent = product1QuantityReturn;
    }
});



//Jumbotron time display
 var time = moment().format("MMMM Do YY, h:mm a"); 
document.getElementById("currentDay").innerHTML = time;







