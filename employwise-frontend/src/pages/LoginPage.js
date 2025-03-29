import { useState, useContext } from "react";
import { login } from "../Services/api";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import "../Styles/LoginPage.css";  // Import CSS file

const LoginPage = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const { loginUser } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const token = await login(email, password);
            loginUser(token);
            navigate("/users");
        } catch (err) {
            setError("Invalid Credentials");
        }
    };

    return (
        <div className="login-container">
            <div className="login-box">
                <h2>Welcome Back</h2>
                {error && <p className="error-message">{error}</p>}
                <form onSubmit={handleSubmit}>
                    <input
                        type="email"
                        placeholder="Enter your email"
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <input
                        type="password"
                        placeholder="Enter your password"
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    <button type="submit">Login</button>
                </form>
            </div>
        </div>
    );
};

export default LoginPage;
