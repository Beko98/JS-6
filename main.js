async function getData() {
  const response = await fetch("https://reqres.in/api/users?page=2");
  const data = await response.json();
  console.log(data);
}

getData();

fetch("https://jsonplaceholder.typicode.com/todos/1")
  .then((response) => response.json())
  .then((json) => console.log(json));

fetch("https://fakerapi.it/api/v1/images?_width=380")
  .then((response) => response.json())
  .then((json) => console.log(json));

// Define a function that returns a Promise
function getTheData() {
  return new Promise((resolve, reject) => {
    // Perform an asynchronous operation, such as a network request
    setTimeout(() => {
      // If the operation is successful, call the resolve function
      resolve("Data retrieved");
    }, 1000);
  });
}

// Use the then() method to handle the Promise's resolved value
getTheData().then((data) => {
  console.log(data); // Output: 'Data retrieved'
});
