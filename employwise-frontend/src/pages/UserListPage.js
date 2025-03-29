import { useEffect, useState } from 'react';
import { getUsers, deleteUser } from '../Services/api';
import { useNavigate } from 'react-router-dom';

const UserListPage = () => {
    const [users, setUsers] = useState([]);
    const [page, setPage] = useState(1);
    const navigate = useNavigate();

    useEffect(() => {
        fetchUsers(page);
    }, [page]);

    const fetchUsers = async (page) => {
        try {
            const data = await getUsers(page);
            setUsers(data.data);
        } catch (error) {
            console.error(error);
        }
    };

    const handleDelete = async (id) => {
        try {
            await deleteUser(id);
            setUsers(users.filter(user => user.id !== id));
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className="min-h-screen bg-gray-100 p-6">
            <h2 className="text-3xl font-bold text-center mb-6">User List</h2>
            <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-md">
                {users.map(user => (
                    <div key={user.id} className="flex justify-between items-center p-4 border-b">
                        <div className="flex items-center space-x-4">
                            <img src={user.avatar} alt={user.first_name} className="w-12 h-12 rounded-full" />
                            <p className="text-lg">{user.first_name} {user.last_name}</p>
                        </div>
                        <div className="space-x-2">
                            <button onClick={() => navigate(`/edit/${user.id}`)}
                                className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-1 rounded">
                                Edit
                            </button>
                            <button onClick={() => handleDelete(user.id)}
                                className="bg-red-500 hover:bg-red-600 text-white px-4 py-1 rounded">
                                Delete
                            </button>
                        </div>
                    </div>
                ))}
                <div className="flex justify-between mt-4">
                    <button onClick={() => setPage(page - 1)} disabled={page === 1}
                        className="px-4 py-2 bg-blue-500 text-white rounded disabled:bg-gray-400">
                        Prev
                    </button>
                    <button onClick={() => setPage(page + 1)}
                        className="px-4 py-2 bg-blue-500 text-white rounded">
                        Next
                    </button>
                </div>
            </div>
        </div>
    );
};

export default UserListPage;
