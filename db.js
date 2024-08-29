const mongoose = require('mongoose');


mongoose.connect('mongodb+srv://shishuraj888:s7hA%40%40Jub5Gi.37@cluster01.xhrnp.mongodb.net/TODO?retryWrites=true&w=majority')
.then(() => console.log('MongoDB connected'))
.catch(err => console.error('MongoDB connection error:', err));


const Todo = mongoose.model("Todo", {
    title:String,
    description: String,
    completed : Boolean
});

module.exports = {
    Todo
}