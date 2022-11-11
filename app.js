// const { layerGroup } = require("fontawesome");

let submit = document.querySelector("#submit");

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
