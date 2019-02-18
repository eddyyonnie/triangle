
var tri = function(one, two, three){
  var onee = document.getElementById("one").value;
  var twoo = document.getElementById("two").value;
  var threee = document.getElementById("three").value;

  var one = parseInt(onee);
  var two = parseInt(twoo);
  var three = parseInt(threee);

  var sumOne = one+two;
  var sumTwo = one+three;
  var sumThree = two+three;

  if(sumOne<=three || sumTwo<=two || sumThree<=one){
    document.getElementById("return").innerHTML="not a tringle."
  }
  else if(one === two && one === three && two === three){
    document.getElementById("return").innerHTML="This is an Equilateral triangle"
  }
  else  if(one===two||two===three||one===three){
  document.getElementById("return").innerHTML="This is an isosceles triangle"
  }
  else {
  document.getElementById("return").innerHTML="This is a scalene"
}
  }
