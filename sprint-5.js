const localStorage = require("./localStorage.js");

//TASK 1
let data = {
    login: `Tom12!`,
    token: "QhuR56Rw"
};

for (const [name, value] of Object.entries(data)) {
    localStorage.setItem([name],[value]);
}

//TASK 2
data = { name: "Tom", age: 25 };
localStorage.setItem("user",JSON.stringify(data));

//TASK 3
localStorage.removeItem("name");

//TASK 4
localStorage.clear();