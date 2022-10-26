function theLoveLetterMystery(s) {
    // Write your code here
    let i = 0,
        count = 0,
        j = s.length - 1,
        result = 0;
    while (i < j) {
        if (s.charAt(i) != s.charAt(j)) {
            result = Math.abs((s.charAt(i).charCodeAt() - s.charAt(j).charCodeAt()));
            count += result
        }
        i++;
        j--;
    }
    return count;
}

console.log(theLoveLetterMystery("abc"))