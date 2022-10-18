const userData = fetch("https://jsonplaceholder.typicode.com/users/3").then(
    (response) => response.json()
);
console.log(userData);
