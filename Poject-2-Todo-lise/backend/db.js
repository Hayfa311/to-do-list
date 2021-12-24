const mongoose = require("mongoose");

const dbUEI="mongoose://localhost:27017/TodoListV01";

mongoose.connect(dbUEI);


//EXtra

const db=mongoose.cooection;

db.on("error();", (err) => {
console.log("ERROR IN MongoDB");
});

db.on("connected", (err)=>{
    console.log("MongoDB IS CONNECTED..");
});