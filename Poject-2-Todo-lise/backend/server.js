const express =require("express")
const app = express ();

const db = require('./db')
const Todo = require('./todo')


// console.log(Todo);

app.use(express.json())

app.get("/", (req,res)=>{
    res.json("GET / if Working");

});


app.get("/tasks", (req, res) => {
    Todo.find({}, (err, data) =>{
        if (err) {
            console.log("ERROR: ", err);
    } else {
        res.json(data);
    }
  });
});

app.post("/tasks", (req, res) => {
});
console.log('25:' ,req.boody);
//consol.log('25: ,req.body);

Todo.create(req.body, (err, newTask) =>  {
    if (err) {
console.log("ERROR:", err);
} else {
     app.delete("/tasks/: id", (req, res) => {
         //console.log("37:", req.params.id);

         Todo.deleteOne({ _id: req.params.id}, (err, deleteObj) =>{
 const express =require("express")
const app = express ();

const db = require('./db')
const Todo = require('./todo')


// console.log(Todo);

app.use(express.json())

app.get("/", (req,res)=>{
    res.json("GET / if Working");

});


app.get("/tasks", (req, res) => {
    Todo.find({}, (err, data) =>{
        if (err) {
            console.log("ERROR: ", err);
    } else {
        res.json(data);
    }
  });
});

app.post("/tasks", (req, res) => {
console.log('25:' ,req.boody);
//consol.log('25: ,req.body);

Todo.create(req.body, (err, newTask) =>  {
    if (err) {
console.log("ERROR:", err);
} else {
      res.status(201).json(newTask);
    }
});
});
     app.delete("/tasks/: id", (req, res) => {
         //console.log("37:", req.params.id);

         Todo.deleteOne({ _id: req.params.id}, (err, deleteObj) =>{
         if (err ){    
        console.log("ERROR: ", err); 
      } else{
     deleteObj.deletedCount === 1
       ? res.json("Delete all comleted todo successfullu")
    : res.status(404).json("This todo is not found");
       
    }
});
});
 
 app.put("/tasks/ :id", (req, res) => {
     // console.log("37:", req.params.id);

     todo.updateOne(
         { _id:req.params.id },
         {tite: req.body.newTitle},
         (err, updatObj) => {
             if (err) {
                 console.log("ERROR: ", err);
                 res.status(400).json(err)
             } else {
                 console.log(updatObj);
                 updatObj.modifiedCount === 1
                 ? res.json("Update one todo successfully")
                :res.status(404).json("This todo is not found");
    }
   }); 
    }); 

app.listen(5000, () => {
    console.log("SERVER IS WORKING ..");
});