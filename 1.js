function FunVal(obj) {
    for (let key in obj) {
        if (obj.hasOwnProperty(key)){
            console.log(key + ": " + obj[key]);
        }
    }
}

const user = {
    profession: "developer",
}

const Anna = Object.create(user);
Anna.name = "Anna";
Anna.pet = "cat";

FunVal(Anna);