const {Schema, modle}= require ("mongoose") ;       

const todoSchema=new Schema({
    title: String,
    isCompletd: Boolean
})

//Model
const Todo=modle('Todo',TodoSchema)

modle.exports =Todo