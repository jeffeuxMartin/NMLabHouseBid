var j=3;

function processFormData1(){
   var name_element = document.getElementById('new_column1');
  var name = name_element.value;
  return name;
 
  }

function processFormData2(){
   var name_element = document.getElementById('new_column2');
  var name = name_element.value;
  return name;
 
  }

function processFormData3(){
   var name_element = document.getElementById('new_column3');
  var name = name_element.value;
  return name;
 
  }

function processFormData4(){
   var name_element = document.getElementById('new_column4');
  var name = name_element.value;
  return name;
 
  }



$("#add1").click(function () {
  j++;
  $("#tbody").append('<tr id='+ j +' ><td>'+ processFormData1() +'</td></tr>');
});

$("#add2").click(function () {
   $('#'+ j).append('<td>'+ processFormData2() +'</td>');
});

$("#add3").click(function () {
   $('#'+ j).append('<td>'+ processFormData3() +'</td>');
});

$("#add4").click(function () {
   $('#'+ j).append('<td>'+ processFormData4() +'</td>');
});

// var tableshown = getElementById("showtable");
$("#retest").click(function() {
   alert();
});