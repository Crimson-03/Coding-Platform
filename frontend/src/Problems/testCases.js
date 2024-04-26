const testCases = [
  {
    _id: { $oid: "6583f041e9bc3fa5ad57e3c4" },
    cases: [
      {
        input: "4 2 7 11 15 9",
        output: "0 1",
      },
      {
        input: "3 3 2 4 6",
        output: "1 2",
      },
      {
        input: "2 3 3 6",
        output: "0 1",
      },
    ],
  },
  {
    _id: { $oid: "6583f051e9bc3fa5ad57e3c5" },
    cases: [
      {
        input: "babad",
        output: "bab",
      },
      {
        input: "cbbd",
        output: "bb",
      },
    ],
  },
  {
    _id: { $oid: "6583f065e9bc3fa5ad57e3c6" },
    cases: [
      {
        input: "3 1 2 3",
        output: "1 2 3 1 3 2 2 1 3 2 3 1 3 1 2 3 2 1",
      },
      {
        input: "2 0 1",
        output: "0 1 1 0",
      },
    ],
  },
  {
    _id: { $oid: "6583f073e9bc3fa5ad57e3c7" },
    cases: [
      {
        input: "4",
        output: "2",
      },
      {
        input: "8",
        output: "2",
      },
    ],
  },
  {
    _id: { $oid: "6583f023e9bc3fa5ad57e3c3" },
    cases: [
      {
        input: "2 10",
        output: "1024",
      },
      {
        input: "2.1 3",
        output: "8.261",
      },
      {
        input: "2 -2",
        output: "0.25",
      },
    ],
  },
];

export default testCases;
