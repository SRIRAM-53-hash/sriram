import React from "react";

const PopupAd = ({ link, onClose }) => {
    return (
        <div style={styles.overlay}>
            <div style={styles.popup}>
                <button onClick={onClose} style={styles.closeButton}>
                    &times;
                </button>
                <img
                    src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExbW5iZHl3Y2NvdGllNzl2MmpwMjF5OTZiNmU5NDl6cnZhYzA1YWVtdSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3iK6S4nQo1Ttgujl9W/giphy.webp" // Replace with the direct GIF URL
                    alt="Eh, what's up doc?"
                    style={styles.gif}
                />
                <h2 style={styles.title}>🌟 Explore Our Company!</h2>
                <p style={styles.text}>
                    Visit our company website to discover exciting service and projects!
                </p>
                <a href={link} target="_blank" rel="noopener noreferrer" style={styles.button}>
                    Visit Now
                </a>
            </div>
        </div>
    );
};

const styles = {
    overlay: {
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(0, 0, 0, 0.6)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 1000,
        animation: "fadeIn 0.5s",
    },
    popup: {
        width: "90%",
        maxWidth: "400px",
        backgroundColor: "#fff",
        padding: "20px",
        borderRadius: "15px",
        boxShadow: "0 4px 20px rgba(0, 0, 0, 0.2)",
        textAlign: "center",
        position: "relative",
        animation: "slideIn 0.4s ease-out",
    },
    gif: {
        width: "100%",
        maxWidth: "300px",
        borderRadius: "10px",
        marginBottom: "15px",
    },
    closeButton: {
        position: "absolute",
        top: "-10px",
        right: "5px",
        background: "none",
        border: "none",
        fontSize: "2rem",
        color: "red",
        cursor: "pointer",
        transition: "color 0.3s",
    },
    title: {
        fontSize: "1.5rem",
        color: "#333",
        marginBottom: "10px",
    },
    text: {
        fontSize: "1rem",
        color: "#555",
        marginBottom: "20px",
    },
    button: {
        display: "inline-block",
        padding: "10px 20px",
        backgroundColor: "#007BFF",
        color: "#fff",
        textDecoration: "none",
        borderRadius: "5px",
        fontSize: "1rem",
        fontWeight: "bold",
        transition: "background-color 0.3s",
    },
};

export default PopupAd;