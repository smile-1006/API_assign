import { useState, useContext } from 'react';
import { login } from '../Services/api';
import { AuthContext } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const { loginUser } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const token = await login(email, password);
            loginUser(token);
            navigate('/users');
        } catch (err) {
            setError(err);
        }
    };

    return (
        <div className="flex h-screen items-center justify-center bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-md w-96">
                <h2 className="text-2xl font-semibold text-center mb-6">Login</h2>
                {error && <p className="text-red-500 text-sm mb-3">{error}</p>}
                <form onSubmit={handleSubmit} className="space-y-4">
                    <input type="email" className="w-full px-4 py-2 border rounded-lg" placeholder="Email"
                        onChange={(e) => setEmail(e.target.value)} required />
                    <input type="password" className="w-full px-4 py-2 border rounded-lg" placeholder="Password"
                        onChange={(e) => setPassword(e.target.value)} required />
                    <button type="submit"
                        className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-lg">
                        Login
                    </button>
                </form>
            </div>
        </div>
    );
};

export default LoginPage;
