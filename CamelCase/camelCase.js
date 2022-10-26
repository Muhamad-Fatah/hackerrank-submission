function camelcase(s) {
    // Write your code here
    let count = 1;
    for (let i in s) {
        if (s.charAt(i) == s.charAt(i).toUpperCase())
        count++
    }
    return count
}

camelcase("saveChangesInTheEditor")