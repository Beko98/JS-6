//   .then((response) => response.json())
//   .then((data) => {
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
