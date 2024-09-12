const users = [
    {
        name: "Akshay",
        age: 28,
    },
    {
        name: "Rushi",
        age: 30,
    },
    {
        name: "Tejas",
        age: 50,
    },
    {
        name: "Sachin",
        age: 8,
    }
];

function sortingByAge() {
    const data = users.sort((a, b) => a.age - b.age);
    return data;
}

console.log(sortingByAge());

module.exports = sortingByAge;