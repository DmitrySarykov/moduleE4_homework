function CreateObj() {
    let new_obj = Object.create(null);
    return new_obj
}

const emptyObj = CreateObj();
console.log(emptyObj);

