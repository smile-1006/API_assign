import { useEffect, useState } from 'react';
import { getUsers, deleteUser } from '../Services/api';

const UserList = () => {
    const [users, setUsers] = useState([]);
    const [page, setPage] = useState(1);

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
        <div>
            <h2>User List</h2>
            {users.map(user => (
                <div key={user.id}>
                    <p>{user.first_name} {user.last_name}</p>
                    <button onClick={() => handleDelete(user.id)}>Delete</button>
                </div>
            ))}
            <button onClick={() => setPage(page - 1)} disabled={page === 1}>Prev</button>
            <button onClick={() => setPage(page + 1)}>Next</button>
        </div>
    );
};

export default UserList;
