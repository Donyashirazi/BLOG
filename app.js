const { layerGroup } = require("fontawesome");

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

const getTodos = (callBack) => {
  const apiRequest = new XMLHttpRequest();

  apiRequest.addEventListener("readystatechange", () => {
    // console.log(apiRequest, apiRequest.readyState);
    if (apiRequest.readyState === 4 && apiRequest.status === 200) {
      callBack(undefined, apiRequest.responseText);
    } else if (apiRequest.readyState === 4) {
      callBack("could not fetch the data", undefined);
    }
  });
};
apiRequest.open("GET", "https://jsonplaceholder.typicode.com/todoss/");
apiRequest.send();

getTodos((err, data) => {
  if (err) {
    console.log(err);
  } else {
    console.log(data);
  }
});
