function LetterChanges(str) { 
  var array = str.split(""); var answer = "";
  for (i=0;i<array.length;i++){
  	if (array[i] == "a" || "e" || "i" || "o" || "u") {
          var temp1 = array[i].toUpperCase();
          temp1 += 1
          answer += temp1;
  	}; 
  	
  }

  // code goes here  
  return answer; 
         
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
LetterChanges(readline());                            

------------------------------------

function LetterChanges(str) { 
  var array = str.split(""); var answer = ""; var temp = "";
  for (i=0;i<array.length;i++){
    temp = array[i].toLowerCase();
    switch(temp) {
      case "a":
          answer += "b"
          break;
      case "b":
          answer += "c"
          break;
      case "c":
          answer += "d"
          break;
      case "d":
          answer += "E"
          break;
      case "e":
          answer += "f"
          break;
      case "f":
          answer += "g"
          break;
      case "g":
          answer += "h"
          break;
      case "h":
          answer += "I"
          break;
      case "i":
          answer += "j"
          break;
      case "j":
          answer += "k"
          break;
      case "k":
          answer += "l"
          break;
      case "l":
          answer += "m"
          break;
      case "m":
          answer += "n"
          break;
      case "n":
          answer += "O"
          break;
      case "o":
          answer += "p"
          break;
      case "p":
          answer += "q"
          break;
      case "q":
          answer += "r"
          break;
      case "r":
          answer += "s"
          break;
      case "s":
          answer += "t"
          break;
      case "t":
          answer += "U"
          break;
      case "u":
          answer += "v"
          break;
      case "v":
          answer += "w"
          break;
      case "w":
          answer += "x"
          break;
      case "x":
          answer += "y"
          break;
      case "y":
          answer += "z"
          break;
      case "z":
          answer += "A"
          break;
      

      default:
          default code block
}
  	
  }



  // code goes here  
  return answer; 
         
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
LetterChanges(readline());                            
