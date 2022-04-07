function ValidProp(string,obj) {
    const result = string in obj;
    return result
}

const Anna = {
    name: "Anna",
    age: 25,
    profession: "developer",
    pet: "cat",
}
const result = ValidProp("car",Anna);
console.log(result);