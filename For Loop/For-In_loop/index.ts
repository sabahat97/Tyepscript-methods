let person:any = {
    name  : "Alice",
     age  : 30, 
     city : "Wonderland"
    };

    for (let key in person){
    console.log(`${key}: ${person[key]}`);
}