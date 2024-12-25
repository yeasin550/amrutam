import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FiMenu } from 'react-icons/fi';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        // <nav className="sticky top-0 bg-[#F5F5F5] z-50">
        <nav className="sticky top-0 z-50 bg-[#FFF7E2]">
            <div className="container mx-auto px-4 py-6 flex items-center justify-between">
                {/* Logo */}
                <div className="text-2xl font-bold">
                    <NavLink to="/" className="text-[#3A643B]">
                       A M R U T A M
                    </NavLink>
                </div>

                {/* Menu Items */}
                <div className="hidden md:flex space-x-8 text-lg">
                    <NavLink
                        to="/"
                        className={({ isActive }) =>
                            `text-[#3A643B] hover:text-bold ${isActive ? 'font-bold' : ''}`
                        }
                    >
                        Home
                    </NavLink>
                    <NavLink
                        to="/find-doctor"
                        className={({ isActive }) =>
                            `text-[#3A643B] hover:font-semibold ${isActive ? 'font-bold' : ''}`
                        }
                    >
                        Find Doctors
                    </NavLink>
                    <NavLink
                        to="/profile"
                        className={({ isActive }) =>
                            `text-[#3A643B] hover:font-semibold ${isActive ? 'font-bold' : ''}`
                        }
                    >
                        Profile
                    </NavLink>
                    <NavLink
                        to="/about"
                        className={({ isActive }) =>
                            `text-[#3A643B] hover:font-semibold ${isActive ? 'font-bold' : ''}`
                        }
                    >
                        About
                    </NavLink>
                </div>

                {/* Enquire Now Button */}
                <div className="hidden md:block text-lg">
                    <NavLink
                        to="/login"
                        className="border border-black font-semibold text-[#3A643B] px-4 py-2 rounded-md transition duration-300"
                    >
                        Login
                    </NavLink>
                    <NavLink
                        to="/signup"
                        className="bg-[#3A643B] border ml-1 font-semibold text-white px-4 py-2 rounded-md transition duration-300"
                    >
                        Sign Up
                    </NavLink>
                </div>

                {/* Mobile Menu Button */}
                <div className="md:hidden">
                    <button onClick={toggleMenu} className="text-gray-800 focus:outline-none">
                        <FiMenu size={24} />
                    </button>
                </div>
            </div>

            {/* Responsive Menu Items */}
            {menuOpen && (
                <div className="md:hidden flex flex-col space-y-4 py-4 px-4 bg-white shadow-lg  text-lg">
                    <NavLink
                        to="/"
                        exact
                        className={({ isActive }) =>
                            `text-[#3A643B] hover:font-semibold ${isActive ? 'font-bold' : ''}`
                        }
                    >
                        Home
                    </NavLink>
                    <NavLink
                        to="/find-doctor"
                        className={({ isActive }) =>
                            `text-[#3A643B] hover:font-semibold ${isActive ? 'font-bold' : ''}`
                        }
                    >
                        Find Doctors
                    </NavLink>
                    <NavLink
                        to="/profile"
                        className={({ isActive }) =>
                            `text-[#3A643B] hover:font-semibold ${isActive ? 'font-bold' : ''}`
                        }
                    >
                        Profile
                    </NavLink>
                    <NavLink
                        to="/about"
                        className={({ isActive }) =>
                            `text-[#3A643B] hover:font-semibold ${isActive ? 'font-bold' : ''}`
                        }
                    >
                        About
                    </NavLink>
                    <div className="flex items-center text-lg">
                        <NavLink
                            to="/login"
                            className="border border-black font-semibold text-[#3A643B] px-4 py-2 rounded-md transition duration-300"
                        >
                            Login
                        </NavLink>
                        <NavLink
                            to="/signup"
                            className="bg-[#3A643B] border ml-2 font-semibold text-white px-4 py-2 rounded-md transition duration-300"
                        >
                            Sign Up
                        </NavLink>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;