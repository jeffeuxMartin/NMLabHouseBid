
function processFormData(){
   var name_element = document.getElementById('new_project');
  var name = name_element.value;
  return name;
 
  }

 
$("#add").click(function () {
   $("#buttons").append('<button>'+ processFormData() +'</button>');
});