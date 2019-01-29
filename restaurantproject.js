var dims1 ={
  name: "Crystal Shrimp Dumplings (Har Gow):",
  meat: "Shrimp",
  sauce: "Soy sauce",
  price:5.00
};

var dims2 ={
  name: "Soup Dumplings (Xiao Long Bao):",
  meat: ["Shrimp","pork"],
  sauce: "Soy sauce",
  vegetables:["Green Onion", "Garlic"],
  price:3.00
};

var dims3 ={
  name: "Chicken Feet (Feng zhua):",
  meat: "Chicken feet",
  sauce: "Soy sauce",
  vegetables:["Chili pepper"],
  price: 4.00
};

var dims4 ={
  name: "Egg Tart (Don tot):",
  meat: ["Egg"," flour"," butter"],
  sauce: ["sugar"," egg"," custard"],
  price:1.50
}

var dims5 = {
  name:"Open-face-pork-and-shrimp dumplings (Siu mai):",
  meat:["Shrimp", "pork"],
  sauce:"Oyester sauce",
  vegetables:"mushrooms",
  price:3.50
}

var dims6 = {
  name:"Deep fried red bean ball (Jian Dui):",
  meat:"Red bean",
  sauce:["Flour", "sugar"],
  vegetables:"Sesame seeds",
  price:1.00
}
  
 function sum1() {
   document.getElementById("dim1").innerHTML = dims1.name + "<br>" +dims1.meat + "<br>" + dims1.sauce + "<br>" + "$" + dims1.price;
 }
 
 function dimsum1(){
   var qty = document.getElementById('quantity1').value;
 var total1 = ((qty * dims1.price)*1.04712).toFixed(2);
 document.getElementById("buy1").innerHTML = "You total is" + " $" + total1;
    localStorage.setItem("buy1", x);

  }
  
  function sum2() {
   document.getElementById("dim2").innerHTML = dims2.name + "<br>" +dims2.meat + "<br>" + dims2.sauce + "<br>" + dims2.vegetables + "<br>" + "$" + dims2.price;
 }
 
 function dimsum2(){
   var qty = document.getElementById('quantity2').value;
 var total2 = ((qty * dims2.price)*1.04712).toFixed(2);
 document.getElementById("buy2").innerHTML = "You total is" + " $" + total2;
  }
 
 function sum3() {
   document.getElementById("dim3").innerHTML = dims3.name + "<br>" +dims3.meat + "<br>" + dims3.sauce + "<br>" + dims3.vegetables + "<br>" + "$" + dims3.price;
 }
 
 function dimsum3(){
   var qty = document.getElementById('quantity3').value;
 var total3 = ((qty * dims3.price)*1.04712).toFixed(2);
 document.getElementById("buy3").innerHTML = "You total is" + " $" + total3;
  }
 
 function sum4() {
   document.getElementById("dim4").innerHTML = dims4.name + "<br>" + dims4.meat + "<br>" + dims4.sauce + "<br>" + "$" + dims4.price;
 }

function dimsum4(){
   var qty = document.getElementById('quantity4').value;
 var total4 = ((qty * dims4.price)*1.04712).toFixed(2);
 document.getElementById("buy4").innerHTML = "You total is" + " $" + total4;
  }

function sum5() {
   document.getElementById("dim5").innerHTML = dims5.name + "<br>" + dims5.meat + "<br>" + dims5.sauce + "<br>" + dims5.vegetables + "<br>" + "$" + dims5.price;
 }

function dimsum5(){
   var qty = document.getElementById('quantity5').value;
 var total5 = ((qty * dims5.price)*1.04712).toFixed(2);
 document.getElementById("buy5").innerHTML = "You total is" + " $" + total5;
  }
  
  
  function sum6() {
   document.getElementById("dim6").innerHTML = dims6.name + "<br>" + dims6.meat + "<br>" + dims6.sauce + "<br>" + dims6.vegetables + "<br>" + "$" + dims6.price;
 }

function dimsum6(){
   var qty = document.getElementById('quantity6').value;
 var total6 = ((qty * dims6.price)*1.04712).toFixed(2);
 document.getElementById("buy6").innerHTML = "You total is" + " $" + total6;
  }
  
function checkout(){
  var x = document.getElementById('buy1').value;
  
   localStorage.setItem("buy1", x);
  location.href = "checkoutpg.html";
}