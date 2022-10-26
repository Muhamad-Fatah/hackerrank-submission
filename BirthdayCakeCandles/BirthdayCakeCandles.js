/*

Example

candles = [4,4,1,3]

The maximum height candles are  units high. There are  of them, so return 2.

Function Description

Complete the function birthdayCakeCandles in the editor below.

birthdayCakeCandles has the following parameter(s):

int candles[n]: the candle heights
Returns

int: the number of candles that are tallest
*/

function solve(candles) {
    const max = Math.max(...candles)
    const filter = candles.filter(candle => candle == max)
    console.log(filter.length)
}

const candles = [4,4,1,3]
solve(candles)