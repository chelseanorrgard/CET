import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Navbar = () => {
  const { currentUser, logout } = useAuth();

  const handleLogOut = () => {
    logout();
  };

  return (
    <header className="max-w-screen-2xl mx-auto px-4 py-6">
      <nav className="flex justify-between items-center">
        {/* Left side */}
        <div>
          <Link to="/">Logo</Link>
        </div>

        {/* Right side */}
        <div className="space-x-10">
          {currentUser ? (
            <button
              onClick={handleLogOut}
              className="text-blue-300 rounded-md border-black border-2 px-4 py-2 hover:bg-black hover:text-white transition duration-500 ease-in-out"
            >
              Logout
            </button>
          ) : (
            <Link
              to="/login"
              className="text-blue-300 rounded-md border-black border-2 px-4 py-2 hover:bg-black hover:text-white transition duration-500 ease-in-out"
            >
              Login
            </Link>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
