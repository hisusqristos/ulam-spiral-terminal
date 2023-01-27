function isPrime(num) {
  let prime = true;
  for (var j = 2; j < num; j++) {
    if (num % j == 0) {
      prime = false;
      break;
    }
  }
  return prime;
}

function spiralMatrix(n) {
  const arr = Array.from({ length: n }, () => []);
  let row = 0;
  let col = 0;
  let rowEnd = n - 1;
  let colEnd = n - 1;
  let counter = n * n;
  while (col <= colEnd && row <= rowEnd) {
    for (let i = col; i <= colEnd; i++) {
      arr[row][i] = counter; //"@";
      counter--; // to reverse 
    }
    row++;

    for (let i = row; i <= rowEnd; i++) {
      arr[i][colEnd] = counter;
      counter--;
    }
    colEnd--;

    for (let i = colEnd; i >= col; i--) {
      arr[rowEnd][i] = counter;
      counter--;
    }
    rowEnd--;

    for (let i = rowEnd; i >= row; i--) {
      arr[i][col] = counter;
      counter--;
    }
    col++;
  }
  return arr;
}

function ulamify(matrix) {
  for (let row = 0; row < matrix.length; row++) {
    for (let element = 0; element < matrix[row].length; element++) {
      if (isPrime(matrix[row][element])) {
        matrix[row][element] = "@";
      } else {
        matrix[row][element] = " ";
      }
    }
  }
  return matrix;
}

console.log(ulamify(spiralMatrix(10)));
