function icecreamParlor(m, arr) {
    // Write your code here
    let mix = {};
    for (let i = 0; i < arr.length; i++) {
        if (mix[(m - arr[i])] != undefined) {
            return [mix[(m - arr[i])] + 1, i + 1];
        }
        mix[arr[i]] = i;
    }
}

icecreamParlor(2,[2, 2,4, 3])