function plusMinus(arr) {
    // Write your code here

    let negative = 0
    let zero = 0
    let positive = 0

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            negative++
        } else if (arr[i] == 0) {
            zero++
        } else {
            positive++
        }
    }
    console.log(positive / arr.length)
    console.log(negative / arr.length)
    console.log(zero / arr.length)
}

plusMinus([-4,3,-9,0,4,1])