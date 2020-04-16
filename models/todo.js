const mongoose = require('mongoose')
const Schema = mongoose.Schema

//schema for todo
const TodoSchema = new Schema({
    action:{
        type: String,
        required: [true, 'The todo text is required']
    }
})

//create a model for todo
const Todo = mongoose.model('todo', TodoSchema)

module.exports = Todo;