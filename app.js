// const { layerGroup } = require("fontawesome");

// const { firstAid } = require("fontawesome");

const submit = document.querySelector("#submit");

submit.onclick = function () {
  var formData = new FormData(document.querySelector("#blog_form"));
  var entries = formData.entries();
  var data = Object.fromEntries(entries);
  var result = Object.entries(data);

  const myNewObject = {};

  for (let i = 0; i < result.length; i++) {
    let keyValuePair = result[i];
    myNewObject[keyValuePair[0]] = keyValuePair[1];
  }
  console.log(myNewObject);
};

const getTodos = async () => {
  let response = await fetch("todos/seconds.json");
  let data = await response.json();

  let responseOne = await fetch("todos/third.json");
  let data1 = await responseOne.json();

  if (response.status !== 200 && responseOne.status !== 200) {
    throw new Error("cant fetch data");
  }

  return [data, data1];
};

getTodos()
  .then((response) => {
    console.log("resolved:", response);
  })
  .catch((err) => console.log("rejected:", err.message));

// const getTodos = (resource) => {
//   return new Promise((resolve, reject) => {
//     const apiRequest = new XMLHttpRequest();

//     apiRequest.addEventListener("readystatechange", () => {
//       if (apiRequest.readyState === 4 && apiRequest.status === 200) {
//         const data = JSON.parse(apiRequest.responseText);
//         resolve(data);
//       } else if (apiRequest.readyState === 4) {
//         reject("data rejected");
//       }
//     });

//     // "https://jsonplaceholder.typicode.com/todos/"
//     apiRequest.open("GET", resource);
//     apiRequest.send();
//   });
// };

// getTodos("todos/first.json")
//   .then((data) => {
//     console.log("promise fullfiled:", data);
//     return getTodos("todos/second.json");
//   })
//   .then((data) => {
//     console.log("promise fullfiled:", data);
//     return getTodos("todos/third.json");
//   })
//   .then((data) => console.log("promise fullfiled:", data))
//   .catch((err) => {
//     console.log("error!!!", err);
//   });

// getTodos("todos/first.json", (err, data) => {
//   console.log(data);
//   getTodos("todos/second.json", (err, data) => {
//     console.log(data);
//     getTodos("todos/third.json", (err, data) => {
//       console.log(data);
//     });
//   });
// });

// fetch("todos/first.json")
//   .then((response) => {
//     console.log("resolved", response);
//     return response.json();
//   })
//   .then((data) => console.log(data))
//   .catch((err) => {
//     console.log("error!!!", err);
//   });
