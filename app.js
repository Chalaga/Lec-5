const mydata = async () => {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((Response) => Response.json())
    .then((data) => {
      // console.log(data);
      data.forEach((element) => {
        // console.log(element);
        const container = document.createElement("div");
        const main = document.querySelector("main");
        main.append(container);
        
        container.innerHTML = `
        <table>
        <tr>
        <th>name</th>
        <th>username</th>
        <th>email</th>
        </tr>
        <tr>
        <th>${element.name}</th>
        <th>${element.username}</th>
        <td>${element.email}</td>
        </tr>
        </table>
        `;
    });
}).catch (err => {
    alert(err);
})
};

mydata();
