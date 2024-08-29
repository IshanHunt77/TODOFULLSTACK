const express = require("express");
const app = express();
const cors = require('cors');
const { schema, idschema } = require("./types");
const { Todo } = require("./db");

app.use(cors());
app.use(express.json());

app.post('/todo', async (req, res) => {
    const { title, description } = req.body;
    // const titleValidation = schema.title.safeParse(title);
    // const todoValidation = schema.todo.safeParse(description);
    const parsed = schema.safeParse({title,description})

    if (!parsed.success) {
        return res.status(400).json({
            msg: "Invalid entry"
        });
    }

    try {
        await Todo.create({ 
            title: parsed.data.title,
            description: parsed.data.description,
            completed: false
        });
        res.json({
            msg: "Todo created successfully"
        });
    } catch (error) {
        console.error('Error creating todo:', error);
        res.status(500).json({
            msg: "Server Error"
        });
    }
});

app.get('/todos', async (req, res) => {
    try {
        const alltodos = await Todo.find({});
        res.json({
            todos: alltodos
        });
    } catch (error) {
        console.error('Error retrieving todos:', error);
        res.status(500).json({
            msg: "Server Error"
        });
    }
});

app.post('/completed', async (req, res) => {
    const { id } = req.body;
    const idValidation = idschema.id.safeParse(id);

    if (!idValidation.success) {
        return res.status(400).json({
            msg: "Invalid ID"
        });
    }

    try {
        await Todo.updateOne(
            { _id: idValidation.data },
            { completed: true }
        );
        res.json({
            msg: "Todo marked as completed"
        });
    } catch (error) {
        console.error('Error updating todo:', error);
        res.status(500).json({
            msg: "Server Error"
        });
    }
});

app.listen(3003, () => {
    console.log("Server is running on port 3002");
});
