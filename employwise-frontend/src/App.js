import { Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import UserListPage from './pages/UserListPage';
import EditUserPage from './pages/EditUserPage';

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/users" element={<UserListPage />} />
            <Route path="/edit/:id" element={<EditUserPage />} />
        </Routes>
    );
};

export default App;
