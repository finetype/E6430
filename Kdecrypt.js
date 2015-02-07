var decryptK = function (message){
    var messageArray = message.split(" "); var results = ""; var result = ""; var c = 0;
    
    for (i=0;i<messageArray.length;i++) {        
        
        if (messageArray[i].length > i){
            result = messageArray[i].charAt(i);
            results += result;
        }
            
        else {
            for (b=i+1;messageArray[i].length <= i;b++) {
                if (b == messageArray.length){return results};
                
                messageArray[i] = messageArray[i] + messageArray[b];
                c++;
            }

            result = messageArray[i].charAt(i);
            results += result;
            i+=c;
            c=0;
        }
    }
    return results;
} 

/*-------------VERY VERBOSE VERSION---------------*/

var decryptC = function (message){
    var messageArray = message.split(" "); var results = ""; var result = ""; var c = 0;
    
    
    for (i=0;i<messageArray.length;i++){
        if (i>0){console.log("index incremented at loop start");}
        console.log(" ")
        console.log(messageArray[i] + ":")
        
        if (messageArray[i].length > i){
            
            console.log("index is "+ i + ", and \"" + messageArray[i] + "\" is big enough, and " + messageArray[i].charAt(i) + " is the current index letter.")
            
            result = messageArray[i].charAt(i);
            results += result;
            
            console.log("therefore, our answer-in-progress stands at " + results);
            
        }
            
        else {
            console.log("index is " + i + ", and \"" + messageArray[i] + "\" is not big enough, so we'll try adding the next word[s] in the array to this word. That gives us the psuedo word, \"" + messageArray[i] + messageArray[i+1] + "\".");
            
            for (b=i+1;messageArray[i].length <= i;b++) {
                if (b == messageArray.length){console.log("ABORTED: there aren't enough letters in this message to generate another letter of this message. The decoded message is: "); return results};
                messageArray[i] = messageArray[i] + messageArray[b];
                console.log("That's not enough, so the new psuedo word is " + messageArray[i] + ", and the index letter is " + messageArray[i].charAt(i));
                c++;
                console.log("c is now " + c)
            }
            console.log("That means the index value of this psuedo word would now be \"" + (messageArray[i]+messageArray[i+1]).charAt(i) + "\".");
            
            result = messageArray[i].charAt(i);
            results += result;
            
            console.log("therefore, our answer-in-progress stands at " + results);
            i+=c;
            console.log("index incremented " + (c) + " times for going through the else/for loop");
            c=0;
        }
    }
    return results;
} 

console.log(decryptC("Hello mY naMe is gEorge do you Like playing"))

//var result3 = decryptC("A b C d e f G h i j k l m n O p q r s t u v w x y z")
//console.log(result3) // This should be "acg"