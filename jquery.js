// Check if jQuery works.
// window.onload = function() {
//   if (window.jQuery) {  
//       // jQuery is loaded  
//       alert("Yeah!");
//   } else {
//       // jQuery is not loaded
//       alert("Doesn't Work");
//   }
// }

$(document).ready(function() {
  // var myString = "This is a jQuery string.";
  // alert(myString);
  var width = $(".right").width();
  width /= 4;
  width -= 20;
  var height = $(".right").height();
  height /= 5;
  height -= 20;
  var diameter = Math.min(height, width);
  $(".button").width(diameter);
  $(".button").height(diameter);
  var buttonFontSize1 = diameter/4;
  var buttonFontSize2 = diameter/3;
  var buttonFontSize3 = diameter/1.5;
  $(".left .content").css("font-size", buttonFontSize1+"px");
  $(".right .content").css("font-size", buttonFontSize2+"px");
  $(".output").css("font-size", buttonFontSize3+"px");
  $(".button47").width(2*diameter+40);
  $(".button47").css("border-radius", diameter/2+"px");
  
  $(".button1").click(function(){ 
    var txt = $(".output").text();
    if (txt=="" || txt[-1]=="/" || txt[-1]=="x" || txt[-1]=="-" || txt[-1]=="+")
    {
      txt += "("
    }
    else
    {
      alert("Invalid input")
    }

    $(".output").text(txt);
  });
  $(".button2").click(function(){ 
  });
  $(".button3").click(function(){ 
  });
  $(".button4").click(function(){ 
  });
  $(".button5").click(function(){ 
  });
  $(".button6").click(function(){ 
  });
  $(".button7").click(function(){ 
  });
  $(".button8").click(function(){ 
  });
  $(".button9").click(function(){ 
  });
  $(".button10").click(function(){ 
  });
  $(".button11").click(function(){ 
  });
  $(".button12").click(function(){ 
  });
  $(".button13").click(function(){ 
  });
  $(".button14").click(function(){ 
  });
  $(".button15").click(function(){ 
  });
  $(".button16").click(function(){ 
  });
  $(".button17").click(function(){ 
  });
  $(".button18").click(function(){ 
  });
  $(".button19").click(function(){ 
  });
  $(".button20").click(function(){ 
  });
  $(".button21").click(function(){ 
  });
  $(".button22").click(function(){ 
  });
  $(".button23").click(function(){ 
  });
  $(".button24").click(function(){ 
  });
  $(".button25").click(function(){ 
  });
  $(".button26").click(function(){ 
  });
  $(".button27").click(function(){ 
  });
  $(".button28").click(function(){ 
  });
  $(".button29").click(function(){ 
  });
  $(".button30").click(function(){ 
  });
  $(".button31").click(function(){ 
  });
  $(".button32").click(function(){ 
  });
  $(".button33").click(function(){ 
  });
  $(".button34").click(function(){ 
  });
  $(".button35").click(function(){ 
  });
  $(".button36").click(function(){ 
  });
  $(".button37").click(function(){ 
  });
  $(".button38").click(function(){ 
  });
  $(".button39").click(function(){ 
  });
  $(".button40").click(function(){ 
  });
  $(".button41").click(function(){ 
  });
  $(".button42").click(function(){ 
  });
  $(".button43").click(function(){ 
  });
  $(".button44").click(function(){ 
  });
  $(".button45").click(function(){ 
  });
  $(".button46").click(function(){ 
  });
  $(".button47").click(function(){ 
  });
  $(".button48").click(function(){ 
  });
  $(".button49").click(function(){ 
  });
});
// var outputstr = "";
// function button1() {
//   alert("hi");
// }
// document.getElementsByClassName('.button1').onclick = button1;
// function myfunction() {
//   alert("hi");
// }
// var buttons = document.getElementsByClassName('.button');
// for (var i = 0; i < buttons.length; i++) {
//   buttons[i].onclick = myfunction;
// }