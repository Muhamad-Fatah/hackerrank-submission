/*
Given five positive integers, find the minimum and maximum values that can be calculated by summing exactly four of the five integers. Then print the respective minimum and maximum values as a single line of two space-separated long integers.

Example
arr = [1,3,5,7,9]

The minimum sum is  and the maximum sum is . The function prints
16 24

*/

function solve(arr) {
    arr.sort()
    let min = 0,
        max = 0

    for (let i = 0; i < arr.length; i++) {
        if (i != 0) {
            max += arr[i]
        }
        if (i != arr.length - 1) {
            min += arr[i]
        }
    }

    console.log(min, max)
}

const arr = [1, 3, 5, 7, 9]
solve(arr)

/*
1.Kita disuruh mencari min sum dan max sum dari 4 element array dalam sebuah array yang memiliki 5 element
2.Pertama kita urutkan angka angka tersebut dari yang terkecil
3.Lalu kita looping sebanyak panjang array (5 kali)
4.Kita buat kondisi, jika "i != 0" maka value index tersebut dijumlahkan kedalam variabel max
5.Kita buat kondisi kedua , jika "i != panjang array - 1" maka value index tersebut dijumlahkan kedalam variabel min
6.Karena logikanya adalah ketika kita mencari jumlah terkecil,cukup jumlahkan semua element tersebut (kecuali element terbesar)
7.Karena logikanya adalah ketika kita mencari jumlah terbesar,cukup jumlahkan semua element tersebut (kecuali element terkecil)
*/