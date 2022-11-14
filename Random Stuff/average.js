// Return the average of a set of numbers in an array
function avgArray(arr) {
    let sum = 0;
    for (let num of arr) {
      sum += num;
    }
    let average = sum / arr.length;
    return `Sum: ${sum} \nAverage: ${average} `;
}