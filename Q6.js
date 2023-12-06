function longestPalindromeSubsequence(S) {
  const n = S.length;
  const dp = Array.from({ length: n }, () => Array(n).fill(0));

  for (let i = 0; i < n; i++) {
    dp[i][i] = 1;
  }

  for (let len = 2; len <= n; len++) {
    for (let i = 0; i < n - len + 1; i++) {
      const j = i + len - 1;
      if (S[i] == S[j] && len == 2) {
        dp[i][j] = 2;
      } else if (S[i] == S[j]) {
        dp[i][j] = dp[i + 1][j - 1] + 2;
      } else {
        dp[i][j] = Math.max(dp[i][j - 1], dp[i + 1][j]);
      }
    }
  }

  let maxLength = dp[0][n - 1];
  let start = 0;
  let end = n - 1;
  let palindromeSubsequence = '';

  while (maxLength > 0) {
    if (dp[start][end] !== dp[start + 1][end - 1]) {
      palindromeSubsequence += S[start];
      start++;
      end--;
      maxLength -= 2;
    } else if (dp[start][end] == dp[start + 1][end]) {
      start++;
    } else {
      end--;
    }
  }

  return palindromeSubsequence;
}
