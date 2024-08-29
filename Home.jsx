import { useNavigate } from "react-router-dom";

export const Home = () => {
    const navigate = useNavigate();

    const gotoCreate = () => {
        navigate("/todo");
    };

    const buttonStyle = {
        backgroundColor: "#4CAF50",
        border: "none",
        color: "white",
        padding: "15px 32px",
        textAlign: "center",
        textDecoration: "none",
        display: "inline-block",
        fontSize: "16px",
        margin: "4px 2px",
        cursor: "pointer",
        borderRadius: "12px"
    };

    return (
        <>
            <button style={buttonStyle} onClick={gotoCreate}>
                Click here to Create TODO
            </button>
        </>
    );
};
