const url = "https://judge0-ce.p.rapidapi.com/about";
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "8d1827b8a4msh60628a6827c2d77p14ce96jsnedc94b66788b",
    "X-RapidAPI-Host": "judge0-ce.p.rapidapi.com",
  },
};

const fun = async () => {
  const response = await fetch(url, options);
  const result = await response.text();
  console.log(result);
};

try {
  fun();
} catch (error) {
  console.error(error);
}
