
var printNums = function (x) {
	console.log(x);
}

[1, 2, 3].forEach(function (x) {console.log(x);})

// kyleEach(array, callback)



var kyleEach = function(arr, callback){
	for(i=0;i<arr.length;i++) {
		callback(arr[i]);
	}
}


// kyleMap(array, callback)

var kyleMap = function(arr, callback){
	var answer = [];
	for(i=0;i<arr;i++){
		answer[i]= callback(arr[i]);
	};
	return answer;
}

var kyleEach = function(arr, callback){
	for(i=0;i<arr.length;i++) {
		callback(arr[i]);
	}
}
kyleEach([1,2,3],{return i*10})


var kyleFilter = function(arr, callback){
	var answer = [];
	for(i=0;i<arr.length;i++){
		if (callback(arr[i])){
			answer.push(arr[i])
		}
	};
	return answer
};

var kyleReduce = function(arr, callback, startval){
	var answer;
	for(i=0;i<arr.length;i++){
		callback(arr[i], startval)
	};
};

kyle