import { useEffect, useState } from "react";
import { getUsers, deleteUser } from "../Services/api";
import { useNavigate } from "react-router-dom";
import "../Styles/UserListPage.css";  // Import CSS file

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
            setUsers(users.filter((user) => user.id !== id));
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className="user-list-container">
            <div className="user-list-box">
                <h2>User List</h2>
                <div className="user-grid">
                    {users.map((user) => (
                        <div key={user.id} className="user-card">
                            <img src={user.avatar} alt={user.first_name} className="user-avatar" />
                            <div className="user-info">
                                <p className="user-name">{user.first_name} {user.last_name}</p>
                                <p className="user-email">{user.email}</p>
                            </div>
                            <div className="user-actions">
                                <button onClick={() => navigate(`/edit/${user.id}`)} className="edit-btn">Edit</button>
                                <button onClick={() => handleDelete(user.id)} className="delete-btn">Delete</button>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="pagination">
                    <button onClick={() => setPage(page - 1)} disabled={page === 1}>Prev</button>
                    <button onClick={() => setPage(page + 1)}>Next</button>
                </div>
            </div>
        </div>
    );
};

export default UserListPage;
