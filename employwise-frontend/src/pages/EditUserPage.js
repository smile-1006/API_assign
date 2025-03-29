import { useState, useEffect } from 'react';
import { updateUser, getUsers } from '../Services/api';
import { useParams, useNavigate } from 'react-router-dom';


const EditUserPage = () => {
    const { id } = useParams();
    const [user, setUser] = useState({ first_name: '', last_name: '', email: '' });
    const [message, setMessage] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        fetchUser();
    }, []);

    const fetchUser = async () => {
        try {
            const data = await getUsers();
            const userData = data.data.find(u => u.id === parseInt(id));
            if (userData) {
                setUser({ first_name: userData.first_name, last_name: userData.last_name, email: userData.email });
            }
        } catch (error) {
            console.error(error);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await updateUser(id, user);
            setMessage('User updated successfully!');
        } catch (error) {
            setMessage(error);
        }
    };

    return (
        <div className="flex h-screen items-center justify-center bg-gray-100">
            <div className="bg-white p-6 rounded-lg shadow-md w-96">
                <h2 className="text-2xl font-bold mb-4">Edit User</h2>
                {message && <p className="text-green-500">{message}</p>}
                <form onSubmit={handleSubmit} className="space-y-4">
                    <input type="text" className="w-full px-4 py-2 border rounded-lg" value={user.first_name}
                        onChange={(e) => setUser({ ...user, first_name: e.target.value })} required />
                    <input type="text" className="w-full px-4 py-2 border rounded-lg" value={user.last_name}
                        onChange={(e) => setUser({ ...user, last_name: e.target.value })} required />
                    <button type="submit"
                        className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-lg">
                        Update
                    </button>
                </form>
            </div>
        </div>
    );
};

export default EditUserPage;
