function findMedian(arr) {
    // Write your code here
    let arrSort = arr.sort((a, b) => {
        return a - b
    });
    let arrLen = Math.floor(arr.length / 2);
    if (arr.length % 2 == 0) {
        return (arr[arrLen] + arr[arrLen - 1]) / 2
    } else {
        return arr[arrLen]
    }
    
}

findMedian([5,3,1,2,4])