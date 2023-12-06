function multiplyMatrix(A, B) {
  const n = A.length;

  if (n === 1) {
    return [[A[0][0] * B[0][0]]];
  }

  const mid = n / 2;
  let A11 = [],
    A12 = [],
    A21 = [],
    A22 = [],
    B11 = [],
    B12 = [],
    B21 = [],
    B22 = [];

  for (let i = 0; i < mid; i++) {
    A11[i] = A[i].slice(0, mid);
    A12[i] = A[i].slice(mid);
    A21[i] = A[i + mid].slice(0, mid);
    A22[i] = A[i + mid].slice(mid);

    B11[i] = B[i].slice(0, mid);
    B12[i] = B[i].slice(mid);
    B21[i] = B[i + mid].slice(0, mid);
    B22[i] = B[i + mid].slice(mid);
  }

  let C11 = sumMatrix(
    multiplyMatrix(A11, B11),
    multiplyMatrix(A12, B21)
  );
  let C12 = sumMatrix(
    multiplyMatrix(A11, B12),
    multiplyMatrix(A12, B22)
  );
  let C21 = sumMatrix(
    multiplyMatrix(A21, B11),
    multiplyMatrix(A22, B21)
  );
  let C22 = sumMatrix(
    multiplyMatrix(A21, B12),
    multiplyMatrix(A22, B22)
  );

  let result = [];
  for (let i = 0; i < n; i++) {
    result[i] = [];
    for (let j = 0; j < n; j++) {
      if (i < mid && j < mid) {
        result[i][j] = C11[i][j];
      } else if (i < mid && j >= mid) {
        result[i][j] = C12[i][j - mid];
      } else if (i >= mid && j < mid) {
        result[i][j] = C21[i - mid][j];
      } else {
        result[i][j] = C22[i - mid][j - mid];
      }
    }
  }

  return result;
}

function sumMatrix(A, B) {
  const n = A.length;
  let result = [];
  for (let i = 0; i < n; i++) {
    result[i] = [];
    for (let j = 0; j < n; j++) {
      result[i][j] = A[i][j] + B[i][j];
    }
  }
  return result;
}
