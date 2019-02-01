var hargow;
var bao;
var feng;
var don;
var siumai;
var jian;

 
    

var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function(){
      if  (this.readyState == 4 && this.status == 200){   // I will do this when requirements are met
      var mydata = JSON.parse(this.responseText);
      
    var hargow = mydata.food[0].price;
    var hargowName = mydata.food[0].name;
    
    var bao = mydata.food[1].price;
    var baoName = mydata.food[1].name;
    
    var feng = mydata.food[2].price;
    var fengName = mydata.food[2].name;
    
    var don = mydata.food[3].price;
    var donName = mydata.food[3].name;
    
    var siumai = mydata.food[4].price;
    var siumaiName = mydata.food[4].name;
    
    var jian = mydata.food[5].price;
    var jianName = mydata.food[5].name;
      
   
  document.getElementById("sum1").innerHTML =  hargowName + "<br>" + "$" + hargow + "<br>" + mydata.food[0].description;
 document.getElementById("sum2").innerHTML = baoName + "<br>" + "$" + bao + "<br>" + mydata.food[1].description;
 document.getElementById("sum3").innerHTML = fengName + "<br>" + "$" + feng + "<br>" + mydata.food[2].description;
 document.getElementById("sum4").innerHTML = donName + "<br>" + "$" + don + "<br>" + mydata.food[3].description;
 document.getElementById("sum5").innerHTML = siumaiName + "<br>" + "$" + siumai + "<br>" + mydata.food[4].description;
 document.getElementById("sum6").innerHTML = jianName + "<br>" + "$" + jian + "<br>" + mydata.food[5].description;
 
  var one = Number(localStorage.setItem(hargow));
  var uno = localStorage.setItem(hargowName);
    var two = Number(localStorage.setItem(bao));
    var dos = localStorage.setItem(baoName);
    var three = Number(localStorage.setItem(feng));
    var tres = localStorage.setItem(fengName);
    var four = Number(localStorage.setItem(don));
    var cuatro = localStorage.setItem(donName);
    var five = Number(localStorage.setItem(siumai));
    var cinco = localStorage.setItem(siumaiName);
    var six = Number(localStorage.setItem(jian));
    var seis = localStorage.setItem(jianName);
  }
    };

      
 function dimsum1(){
   var name1 = Number(localStorage.getItem(hargow));
   window.alert(name1); //testing
   var qty = document.getElementById('quantity1').value;
 var total1 = ((qty * 5)*1.04712).toFixed(2);
 document.getElementById("buy1").innerHTML = "You total is" + " $" + total1;
 var price1 = Number(localStorage.setItem("firsttotal",total1));

}
  
  function dimsum2(){
   var qty = document.getElementById('quantity2').value;
 var total2 = ((qty * 1.04712)*3).toFixed(2);
 document.getElementById("buy2").innerHTML = "You total is" + " $" + total2;
 var price2= Number(localStorage.setItem(total2));
}
      
  function dimsum3(){
   var qty = document.getElementById('quantity3').value;
 var total3 = ((qty * 1.04712)*4).toFixed(2);
 document.getElementById("buy3").innerHTML = "You total is" + " $" + total3;
 var price3 = Number(localStorage.setItem(total3));
}
      
function dimsum4(){
   var qty = document.getElementById('quantity4').value;
 var total4 = ((qty * 1.04712)*1.5).toFixed(2);
 document.getElementById("buy4").innerHTML = "You total is" + " $" + total4;
 var price4 = Number(localStorage.setItem(total4));
}
      
    function dimsum5(){
   var qty = document.getElementById('quantity5').value;
 var total5 = ((qty * 1.04712)*3.5).toFixed(2);
 document.getElementById("buy5").innerHTML = "You total is" + " $" + total5;
 var price5 = Number(localStorage.setItem(total5));
}
      
      function dimsum6(){
   var qty = document.getElementById('quantity6').value;
 var total6 = ((qty * 1.04712)*1).toFixed(2);
 document.getElementById("buy6").innerHTML = "You total is" + " $" + total6;
 var price6 = Number(localStorage.setItem(total6));
}
   
      
    
    
    xmlhttp.open("GET","restaurant.json",true);
    xmlhttp.send();
 

 var previous = null;
var current = null;
    setInterval(function(){
        $.getJSON("restaurant.json", function(json){
            current = JSON.stringify(json);
            if (previous && current && previous!==current){
                location.reload();
            }
            previous = current;
        });
    }, 2000);
    
    function checkout(){
  var x = document.getElementById('buy1').value;
  
   localStorage.setItem("buy1", x);
  location.href = "checkoutpg.html";
}
