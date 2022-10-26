function alternatingCharacters(s) {
    // Write your code here
    let result = 0;
    let arr = s.split("");
    let first = arr[0];

    arr = arr.filter((item, key) => {
        if (item != first && key != 0) {
            first = item;
            return item;
        }
    });
    result = s.length - [s.charAt(0), ...arr].length
    return result
}

alternatingCharacters("AAAA")