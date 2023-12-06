function partition(arr, p, r, piv) {
  let q1 = p - 1;
  let q2 = r + 1;
  let i = p;
  while (i < q2) {
    if (arr[i] < piv) {
      q1++;
      [arr[i], arr[q1]] = [arr[q1], arr[i]];
      i++;
    } else if (arr[i] === piv) {
      i++;
    } else {
      q2--;
      [arr[i], arr[q2]] = [arr[q2], arr[i]];
    }
  }
  return { q1, q2 };
}
