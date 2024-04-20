var person = { name: "Alice", city: "london", age: 30 };
for (var key in person) {
    console.log("".concat(key, ": ").concat(person[key]));
}
