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
      
    var one = Number(localStorage.setItem(hargow));
    var two = Number(localStorage.setItem(bao));
    var three = Number(localStorage.setItem(feng));
    var four = Number(localStorage.setItem(don));
    var five = Number(localStorage.setItem(siumai));
    var six = Number(localStorage.setItem(jian));
    
  document.getElementById("sum1").innerHTML =  hargowName + "<br>" + "$" + hargow + "<br>" + mydata.food[0].description;
 document.getElementById("sum2").innerHTML = baoName + "<br>" + "$" + bao + "<br>" + mydata.food[1].description;
 document.getElementById("sum3").innerHTML = fengName + "<br>" + "$" + feng + "<br>" + mydata.food[2].description;
 document.getElementById("sum4").innerHTML = donName + "<br>" + "$" + don + "<br>" + mydata.food[3].description;
 document.getElementById("sum5").innerHTML = siumaiName + "<br>" + "$" + siumai + "<br>" + mydata.food[4].description;
 document.getElementById("sum6").innerHTML = jianName + "<br>" + "$" + jian + "<br>" + mydata.food[5].description;
     
      }
      
 
  
      
      /*function dimsum2(){
   var qty = document.getElementById('quantity2').value;
 var total1 = ((qty * mydata.food[1].price)*1.04712).toFixed(2);
 document.getElementById("buy2").innerHTML = "You total is" + " $" + total1;
      }
      
      function dimsum3(){
   var qty = document.getElementById('quantity3').value;
 var total1 = ((qty * mydata.food[2].price)*1.04712).toFixed(2);
 document.getElementById("buy3").innerHTML = "You total is" + " $" + total1;
      }
      
       function dimsum4(){
   var qty = document.getElementById('quantity4').value;
 var total1 = ((qty * mydata.food[3].price)*1.04712).toFixed(2);
 document.getElementById("buy4").innerHTML = "You total is" + " $" + total1;
      }
      
       function dimsum5(){
   var qty = document.getElementById('quantity5').value;
 var total1 = ((qty * mydata.food[4].price)*1.04712).toFixed(2);
 document.getElementById("buy5").innerHTML = "You total is" + " $" + total1;
      }
      
       function dimsum6(){
   var qty = document.getElementById('quantity6').value;
 var total1 = ((qty * mydata.food[5].price)*1.04712).toFixed(2);
 document.getElementById("buy6").innerHTML = "You total is" + " $" + total1;
    }*/
        
    };
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
