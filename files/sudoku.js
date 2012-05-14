//Function based on the w3scholls Tutorial: http://www.w3schools.com/js/tryit.asp?filename=tryjs_timing_clock
function date() {
  var now=new Date();
  var day = now.getDate();
  var month = now.getMonth() + 1;
  var year = now.getFullYear();
  var h=now.getHours();
  var m=now.getMinutes();
  var s=now.getSeconds();
  // 'checkTime' will add a zero in front of numbers smaller than 10
  m=checkTime(m);
  s=checkTime(s);
  display_date=day + '/' + month + '/' + year + ' - ' +h+":"+m+":"+s;
  document.getElementById('current_date').innerHTML=display_date;
  t=setTimeout('date()',500);
}
function checkTime(i) {
  if (i<10)
    {
    i="0" + i;
    }
  return i;
}

//Funcyion based on Scott Andrew code: http://www.scottandrew.com/weblog/articles/cbs-events
function addLoadEvent(func) {
  var oldonload = window.onload;
  if (typeof window.onload != 'function') {
    window.onload = func;
  }
  else {
    window.onload = function() {
      if (oldonload) {
        oldonload();
      }
      func();
    };
  }
}
addLoadEvent(date);

var Easy = '306500090200400851100780060009368500628000349005924100040097002863001005070003408';
var Easy_Answer = "386512794297436851154789263419368527628175349735924186541897632863241975972653418";

var Normal = '800000310000517000090000250700308001400000006300201005073000040000896000018000002';
var Normal_Answer = "865429317234517689197683254759368421421975836386241795673152948542896173918734562";

var Hard = '080000001900276000050000029009800200001409800006005300730000060000938002200000040';
var Hard_Answer = "682594731913276485457381629549863217371429856826715394735142968164938572298657143";

//Define global variable to hold the loaded puzzle and start it as zero
var current_puzzle = 0;

//Load puzzle
function LoadPuzzle(level) {
  if (level == 1) {
    current_puzzle = Easy;
  }
  if (level == 2) {
    current_puzzle = Normal;
  }
  if (level == 3) {
    current_puzzle = Hard;
  }
    temp = current_puzzle.split("");
  for (var i=0; i < 81; i++) {
    //do not display the zeros
    if(temp[i]=='0') {
      document.getElementById(i+1).value='';
      document.getElementById(i+1).style.color="#000000";
    }
    else {
      document.getElementById(i+1).value=temp[i];
      document.getElementById(i+1).style.color="#A0A0A0";
    }
  }
}

//Reload curent puzzle
function Reload() {
  if (current_puzzle===0) {
    alert('Select a puzzle to start');
  }
  else {
    var temp=confirm("Restart the Current Game");
    if (temp===true) {
      LoadPuzzle(current_puzzle);
    } 
  }
}

//Clear cell if 0 and check if the entered value is a number between 1-9
function CheckValue(obj) {
  if (obj.value==='0') {
    obj.value='';
  }
  if (isNaN(obj.value)===true || obj.value<0 || obj.value>9) {
    alert('Invalid input \nPlease choose a number between 1-9');
    obj.value='';
  }	
}

//Define global variable to hold the id of the last onfocus text field
current_id = 0;

//Get the id of the current text field onfocus
function getID(id) {
  current_id=id;
}

//Check id the entered value match to the correct answer
function CheckCell() {
  if (current_puzzle===0) {
	alert('Select a puzzle to start');
	obj.value='';
  }
  if (current_puzzle==Easy) {
    answer=Easy_Answer;
  }
  if (current_puzzle==Normal) {
    answer=Normal_Answer;
  }
  if (current_puzzle==Hard) {
    answer=Hard_Answer;
  }
  correct = answer.split("");
  temp = document.getElementById(current_id).value;
  if (temp==='') {
    alert('Selected cell is empty');
  }
  else {
    if (correct[current_id-1] == temp) {
      alert('Well Done! ' + temp + ' is the corect answer');
      document.getElementById(current_id).style.color="#339933";
	}
    else {
      alert('Try Again! ' + temp + ' is a wrong answer'); 
	  document.getElementById(current_id).style.color="#FF0000";
	}
  }
}

	
//increase the font size up to 2em
function IncreaseFont() {
  if (document.body.style.fontSize === "") {
    document.body.style.fontSize = "1.0em";
  }
  temp=document.body.style.fontSize.split("");
  if (temp[0] < "2") {
    document.body.style.fontSize = parseFloat(document.body.style.fontSize) + (0.1) + "em";
  }
  else {
    alert("Font has reached maximun size");
  }
}
//decrease the font size down to 0.7em
function DecreaseFont() {
  if (document.body.style.fontSize === "") {
    document.body.style.fontSize = "1.0em";
  }
  temp=document.body.style.fontSize.split("");
  if (temp[0] == "0" && temp[2] <8) {
    alert("Font has reached minimun size");
  }
  else {
    document.body.style.fontSize = parseFloat(document.body.style.fontSize) + (-0.1) + "em";
  }
}
//Reset font size
function ResetFont() {
  document.body.style.fontSize = "1.0em";
}

//Black and White Theme
function BlackWhite() {
  document.body.style.backgroundColor = "#ffffff";	
  document.getElementsByTagName("header")[0].style.backgroundColor = '#ffffff';
  document.getElementsByTagName("header")[0].style.color = '#000000';
  document.getElementsByTagName("nav")[0].style.backgroundColor = '#ffffff';
  document.getElementsByTagName("nav")[0].style.color = '#000000';
  document.getElementsByTagName("p")[0].style.color = '#000000';
  
  document.getElementsByTagName("li")[0].style.backgroundColor = '#ffffff';
  document.getElementsByTagName("a")[0].style.color = '#000000';
  document.getElementsByTagName("li")[1].style.backgroundColor = '#ffffff';
  document.getElementsByTagName("a")[1].style.color = '#000000';
  document.getElementsByTagName("li")[2].style.backgroundColor = '#ffffff';
  document.getElementsByTagName("a")[2].style.color = '#000000';
  
  document.getElementsByTagName("li")[3].style.backgroundColor = '#ffffff';
  document.getElementsByTagName("a")[3].style.color = '#000000';
  document.getElementsByTagName("li")[4].style.backgroundColor = '#ffffff';
  document.getElementsByTagName("a")[4].style.color = '#000000';
  
  document.getElementsByTagName("li")[5].style.backgroundColor = '#ffffff';
  document.getElementsByTagName("a")[5].style.color = '#000000';
  document.getElementsByTagName("li")[6].style.backgroundColor = '#ffffff';
  document.getElementsByTagName("a")[6].style.color = '#000000';
  document.getElementsByTagName("li")[7].style.backgroundColor = '#ffffff';
  document.getElementsByTagName("a")[7].style.color = '#000000';
  
  document.getElementsByTagName("li")[8].style.backgroundColor = '#ffffff';
  document.getElementsByTagName("a")[8].style.color = '#000000';
  document.getElementsByTagName("li")[9].style.backgroundColor = '#ffffff';
  document.getElementsByTagName("a")[9].style.color = '#000000';
  document.getElementsByTagName("li")[10].style.backgroundColor = '#ffffff';
  document.getElementsByTagName("a")[10].style.color = '#000000';

  document.getElementsByTagName("section")[0].style.backgroundColor = '#ffffff';
  document.getElementsByTagName("section")[0].style.color = '#000000';
  document.getElementsByTagName("aside")[0].style.backgroundColor = '#ffffff';
  document.getElementsByTagName("aside")[0].style.color = '#000000';
  document.getElementsByTagName("aside")[1].style.backgroundColor = '#ffffff';
  document.getElementsByTagName("aside")[1].style.color = '#000000';
  document.getElementsByTagName("footer")[0].style.backgroundColor = '#ffffff';
}


//High Contrast
function HighContrast() {
  document.body.style.backgroundColor = "#ffffff";	
  document.getElementsByTagName("header")[0].style.backgroundColor = '#ffff00';
  document.getElementsByTagName("header")[0].style.color = '#000000';
  document.getElementsByTagName("nav")[0].style.backgroundColor = '#ffff00';
  document.getElementsByTagName("nav")[0].style.color = '#000000';
  
  document.getElementsByTagName("li")[0].style.backgroundColor = '#000000';
  document.getElementsByTagName("a")[0].style.color = '#ffff00';
  document.getElementsByTagName("li")[1].style.backgroundColor = '#000000';
  document.getElementsByTagName("a")[1].style.color = '#ffff00';
  document.getElementsByTagName("li")[2].style.backgroundColor = '#000000';
  document.getElementsByTagName("a")[2].style.color = '#ffff00';
  
  document.getElementsByTagName("li")[3].style.backgroundColor = '#000000';
  document.getElementsByTagName("a")[3].style.color = '#ffff00';
  document.getElementsByTagName("li")[4].style.backgroundColor = '#000000';
  document.getElementsByTagName("a")[4].style.color = '#ffff00';
  
  document.getElementsByTagName("li")[5].style.backgroundColor = '#000000';
  document.getElementsByTagName("a")[5].style.color = '#ffff00';
  document.getElementsByTagName("li")[6].style.backgroundColor = '#000000';
  document.getElementsByTagName("a")[6].style.color = '#ffff00';
  document.getElementsByTagName("li")[7].style.backgroundColor = '#000000';
  document.getElementsByTagName("a")[7].style.color = '#ffff00';
  
  document.getElementsByTagName("li")[8].style.backgroundColor = '#000000';
  document.getElementsByTagName("a")[8].style.color = '#ffff00';
  document.getElementsByTagName("li")[9].style.backgroundColor = '#000000';
  document.getElementsByTagName("a")[9].style.color = '#ffff00';
  document.getElementsByTagName("li")[10].style.backgroundColor = '#000000';
  document.getElementsByTagName("a")[10].style.color = '#ffff00';

  document.getElementsByTagName("section")[0].style.backgroundColor = '#ffff00';
  document.getElementsByTagName("section")[0].style.color = '#000000';
  document.getElementsByTagName("aside")[0].style.backgroundColor = '#ffff00';
  document.getElementsByTagName("aside")[0].style.color = '#000000';
  document.getElementsByTagName("aside")[1].style.backgroundColor = '#ffff00';
  document.getElementsByTagName("aside")[1].style.color = '#000000';
  document.getElementsByTagName("footer")[0].style.backgroundColor = '#ffff00';
}

//Restore Default Theme
function DefaultTheme() {
  document.body.style.backgroundColor = "#ffffff";	
  document.getElementsByTagName("header")[0].style.backgroundColor = '#92BA8F';
  document.getElementsByTagName("header")[0].style.color = '#000000';
  document.getElementsByTagName("nav")[0].style.backgroundColor = '#92BA8F';
  document.getElementsByTagName("nav")[0].style.color = '#000000';
  
  document.getElementsByTagName("li")[0].style.backgroundColor = '#000000';
  document.getElementsByTagName("a")[0].style.color = '#ffffff';
  document.getElementsByTagName("li")[1].style.backgroundColor = '#000000';
  document.getElementsByTagName("a")[1].style.color = '#ffffff';
  document.getElementsByTagName("li")[2].style.backgroundColor = '#000000';
  document.getElementsByTagName("a")[2].style.color = '#ffffff';
  
  document.getElementsByTagName("li")[3].style.backgroundColor = '#000000';
  document.getElementsByTagName("a")[3].style.color = '#ffffff';
  document.getElementsByTagName("li")[4].style.backgroundColor = '#000000';
  document.getElementsByTagName("a")[4].style.color = '#ffffff';
  
  document.getElementsByTagName("li")[5].style.backgroundColor = '#000000';
  document.getElementsByTagName("a")[5].style.color = '#ffffff';
  document.getElementsByTagName("li")[6].style.backgroundColor = '#000000';
  document.getElementsByTagName("a")[6].style.color = '#ffffff';
  document.getElementsByTagName("li")[7].style.backgroundColor = '#000000';
  document.getElementsByTagName("a")[7].style.color = '#ffffff';
  
  document.getElementsByTagName("li")[8].style.backgroundColor = '#000000';
  document.getElementsByTagName("a")[8].style.color = '#ffffff';
  document.getElementsByTagName("li")[9].style.backgroundColor = '#000000';
  document.getElementsByTagName("a")[9].style.color = '#ffffff';
  document.getElementsByTagName("li")[10].style.backgroundColor = '#000000';
  document.getElementsByTagName("a")[10].style.color = '#ffffff';

  document.getElementsByTagName("section")[0].style.backgroundColor = '#92BA8F';
  document.getElementsByTagName("section")[0].style.color = '#000000';
  document.getElementsByTagName("aside")[0].style.backgroundColor = '#92BA8F';
  document.getElementsByTagName("aside")[0].style.color = '#000000';
  document.getElementsByTagName("aside")[1].style.backgroundColor = '#92BA8F';
  document.getElementsByTagName("aside")[1].style.color = '#000000';
  document.getElementsByTagName("footer")[0].style.backgroundColor = '#92BA8F';
}
