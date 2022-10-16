// JavaScript object to hold the data

var data = {
    "name": "John Doe",
    "age": 25,
    "address": {
        "street": "123 Main St",
        "city": "Anytown",
        "state": "CA"
    },
    phoneOn : true,
    "phoneNumbers": [
        { "type": "home", "number": "408 123-4567" },
        { "type": "fax", "number": "408 123-4568" }
    ]

};

console.log(data.name);
console.log(data.age);
console.log(data.address.street);
console.log(data.phoneOn);
console.log(data.phoneNumbers[0].number);