import PropTypes from 'prop-types';
import { auth } from '../../firebase';
import { useNavigate } from 'react-router-dom';

const Navbar = ({ userName }) => {
    const navigate = useNavigate();

    const handleLogout = async () => {
        try {
            await auth.signOut();
            navigate('/signin');
        } catch (error) {
            console.error("Logout failed: ", error);
        }
    };

    return (
        <nav className="flex justify-between items-center p-5 bg-green-700 text-white">
            <h1 className="text-lg font-bold">Sigap Bersama</h1>
            <ul className="flex space-x-6">
                <li><a href="#bencana">Bencana</a></li>
                <li><a href="#limbah">Limbah</a></li>
                {!userName ? (
                    <li><a href="/signin">Login</a></li>
                ) : (
                    <>
                        <li className="font-semibold">Hello, {userName}</li>
                        <li>
                            <button onClick={handleLogout} className="text-red-500 hover:underline">
                                Logout
                            </button>
                        </li>
                    </>
                )}
            </ul>
        </nav>
    );
};

Navbar.propTypes = {
  userName: PropTypes.string,
};

export default Navbar;