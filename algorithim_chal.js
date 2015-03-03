var findSmallestDifference = function(arr) {
    var i=0, answer = arr[0] + arr[1];
    arr.sort(function(x,y){return x - y;});
    while(i+1<arr.length){
        (arr[i+1] - arr[i]) < answer ? answer = (arr[i+1] - arr[i]) : null;
        if(answer === 0){return 0;}
        i++;
    }
    return answer;
};

findSmallestDifference([10,382938,84834])