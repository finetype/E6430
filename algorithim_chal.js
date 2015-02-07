var findSmallestDifference = function(arr) {
    var differences = [], i=0;
    arr.sort(function(x,y){return x - y;});
    while(i+1<arr.length){
        differences[i] = arr[i+1] - arr[i];
        if(differences[i] === 0){return 0;}
        i++;
    }
    differences.sort(function(x,y){return x - y;});
    return differences[0];
};