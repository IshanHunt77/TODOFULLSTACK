import { useEffect, useState } from "react";

export const Todo = () => {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3003/todos")
            .then(async res => {
                if (!res.ok) {
                    throw new Error(`HTTP error! Status: ${res.status}`);
                }
                const json = await res.json();
                setTodos(json.todos); // Assuming the response structure is { todos: [...] }
            })
            .catch(err => console.error("Failed to fetch todos:", err));
    }, []);

    const containerStyle = {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "20px",
        backgroundColor: "#f0f0f0",
        minHeight: "100vh"
    };

    const todoItemStyle = {
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        backgroundColor: "#fff",
        padding: "15px",
        margin: "10px 0",
        borderRadius: "8px",
        width: "300px",
        boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)"
    };

    const todoTitleStyle = {
        fontWeight: "bold",
        fontSize: "18px",
        marginBottom: "5px",
        color: "#333"
    };

    const todoDescriptionStyle = {
        fontSize: "14px",
        color: "#666",
        marginBottom: "10px"
    };

    const buttonStyle = {
        padding: "8px 12px",
        fontSize: "14px",
        borderRadius: "5px",
        border: "none",
        backgroundColor: "#4CAF50",
        color: "white",
        cursor: "pointer",
        alignSelf: "center",
        width: "100%",
        textAlign: "center"
    };

    const completedButtonStyle = {
        ...buttonStyle,
        backgroundColor: "#9E9E9E",
        cursor: "default"
    };

    return (
        <div style={containerStyle}>
            {todos.map((todo, index) => (
                <div key={index} style={todoItemStyle}>
                    <div style={todoTitleStyle}>{todo.title}</div>
                    <div style={todoDescriptionStyle}>{todo.description}</div>
                    <button
                        style={todo.complete === true ? completedButtonStyle : buttonStyle}
                        disabled={todo.complete === true}
                    >
                        {todo.complete === true ? "Completed" : "Mark as Complete"}
                    </button>
                </div>
            ))}
        </div>
    );
};
