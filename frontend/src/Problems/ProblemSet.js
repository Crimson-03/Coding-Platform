const problems = [
  {
    _id: { $oid: "6583f041e9bc3fa5ad57e3c4" },
    title: "Two Sum",
    statement:
      "Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target. You may assume that each input would have exactly one solution, and you may not use the same element twice. You can return the answer in any order.",
    constraints: [
      "2 <= nums.length <= 10^4",
      "-10^9 <= nums[i] <= 10^9",
      "-10^9 <= target <= 10^9",
      "Only one valid answer exists.",
    ],
    testCases: [
      {
        nums: [2, 7, 11, 15],
        target: 9,
        output: [0, 1],
      },
      {
        nums: [3, 2, 4],
        target: 6,
        output: [1, 2],
      },
      {
        nums: [3, 3],
        target: 6,
        output: [0, 1],
      },
    ],
  },
  {
    _id: { $oid: "6583f051e9bc3fa5ad57e3c5" },
    title: "Longest Palindromic Substring",
    statement:
      "Given a string s, return the longest \npalindromic substring in s.",
    constraints: [
      "1 <= s.length <= 1000",
      "'s' consist of only digits and English letters.",
    ],
    testCases: [
      { s: "babad", Output: "bab" },
      { s: "cbbd", Output: "bb" },
    ],
  },
  {
    _id: { $oid: "6583f065e9bc3fa5ad57e3c6" },
    title: "Permutations",
    statement:
      "Given an array nums of distinct integers, return all the possible permutations. You can return the answer in any order.",
    constraints: [
      "1 <= nums.length <= 6",
      "-10 <= nums[i] <= 10",
      "All the integers of nums are unique.",
    ],
    testCases: [
      {
        nums: [1, 2, 3],
        output: [
          [1, 2, 3],
          [1, 3, 2],
          [2, 1, 3],
          [2, 3, 1],
          [3, 1, 2],
          [3, 2, 1],
        ],
      },
      {
        nums: [0, 1],
        output: [
          [0, 1],
          [1, 0],
        ],
      },
    ],
  },
  {
    _id: { $oid: "6583f073e9bc3fa5ad57e3c7" },
    title: "Sqrt(x)",
    statement:
      "Given a non-negative integer x, return the square root of x rounded down to the nearest integer. The returned integer should be non-negative as well.\n\nYou must not use any built-in exponent function or operator.\n\n- For example, do not use pow(x, 0.5) in c++ or x ** 0.5 in python.",
    constraints: ["0 <= x <= 2^(31) - 1"],
    testCases: [
      {
        x: 4,
        output: 2,
      },
      {
        x: 8,
        output: 2,
      },
    ],
  },
  {
    _id: { $oid: "6583f023e9bc3fa5ad57e3c3" },
    title: "Pow(x, n)",
    statement:
      "Implement pow(x, n), which calculates x raised to the power n (i.e., x^n).",
    constraints: [
      "-100.0 < x < 100.0",
      "-2^31 <= n <= 2^(31)-1",
      "n is an integer.",
      "Either x is not zero or n > 0.",
      "-104 <= xn <= 104",
    ],
    testCases: [
      {
        x: 2,
        n: 10,
        output: 1024,
      },
      {
        x: 2.1,
        n: 3,
        output: 8.261,
      },
      {
        x: 2,
        n: -2,
        output: 0.25,
      },
    ],
  },
];

export default problems;
