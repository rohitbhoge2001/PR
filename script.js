/* style.css */
body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background: linear-gradient(135deg, #ff758c, #ff7eb3);
    overflow: hidden;
}

.container {
    text-align: center;
    animation: fadeIn 2s ease-in-out;
}

.card {
    background: rgba(255, 255, 255, 0.8);
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
    animation: fadeInUp 1.5s ease-in-out;
}

button {
    background-color: #ff4d6d;
    color: white;
    border: none;
    padding: 10px 20px;
    font-size: 16px;
    cursor: pointer;
    border-radius: 5px;
    transition: background 0.3s;
}

button:hover {
    background-color: #ff1e4d;
}

@keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
}

@keyframes fadeInUp {
    from { transform: translateY(50px); opacity: 0; }
    to { transform: translateY(0); opacity: 1; }
}

@keyframes heartFloat {
    0% { transform: scale(1) translateY(0); opacity: 1; }
    50% { transform: scale(1.2) translateY(-20px); opacity: 0.8; }
    100% { transform: scale(1) translateY(0); opacity: 1; }
}

.heart {
    position: absolute;
    font-size: 2rem;
    color: red;
    animation: heartFloat 1.5s infinite;
}
