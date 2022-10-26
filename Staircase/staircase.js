function staircase(n) {
    // Write your code here
    let result = ""

    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= n - i; j++) {
            result += " "
        }
        for (let k = n; k > n-i; k--) {
            result += "#"
        }
        result += "\n"
    }
    console.log(result)
}

staircase(6)