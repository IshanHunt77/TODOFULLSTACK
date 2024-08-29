import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const CreateTodo = () => {
    const [todo, setTodo] = useState("");
    const [title, setTitle] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleTodoChange = (e) => {
        setTodo(e.target.value);
    };

    const handleTitleChange = (e) => {
        setTitle(e.target.value);
    };

    const gotoTODOS = () => {
        navigate("/todos");
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            const response = await fetch("http://localhost:3003/todo", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ title, description: todo })
            });

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            const result = await response.json();
            console.log(result);
            alert("Todo created");

            // Reset form fields
            setTodo("");
            setTitle("");
        } catch (error) {
            console.error("Error creating TODO:", error);
            alert("Failed to create TODO. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    const formStyle = {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "10px",
        width: "300px",
        margin: "0 auto",
        padding: "20px",
        border: "1px solid #ccc",
        borderRadius: "10px",
        backgroundColor: "#f9f9f9",
        boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)"
    };

    const inputStyle = {
        width: "100%",
        padding: "10px",
        fontSize: "16px",
        borderRadius: "5px",
        border: "1px solid #ccc",
        outline: "none"
    };

    const buttonStyle = {
        padding: "10px 20px",
        fontSize: "16px",
        borderRadius: "5px",
        border: "none",
        backgroundColor: "#4CAF50",
        color: "white",
        cursor: "pointer",
        width: "100%"
    };

    const disabledButtonStyle = {
        ...buttonStyle,
        backgroundColor: "#9E9E9E",
        cursor: "not-allowed"
    };

    return (
        <div style={{ textAlign: "center", padding: "50px 0" }}>
            <form onSubmit={handleSubmit} style={formStyle}>
                <input
                    type="text"
                    value={title}
                    onChange={handleTitleChange}
                    placeholder="Enter TODO title"
                    style={inputStyle}
                    disabled={loading}
                />
                <input
                    type="text"
                    value={todo}
                    onChange={handleTodoChange}
                    placeholder="Enter TODO description"
                    style={inputStyle}
                    disabled={loading}
                />
                <button type="submit" style={loading ? disabledButtonStyle : buttonStyle} disabled={loading}>
                    {loading ? "Creating..." : "Create TODO"}
                </button>
            </form>
            <button onClick={gotoTODOS} style={loading ? disabledButtonStyle : buttonStyle} disabled={loading}>
                {loading ? "Loading..." : "Get all TODOS"}
            </button>
        </div>
    );
};
