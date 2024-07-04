import { useState } from "react";
import { Link } from "react-router-dom";
import SunIcon from "remixicon-react/SunFillIcon";
import MoonIcon from "remixicon-react/MoonFillIcon";
import MenuIcon from "remixicon-react/MenuFoldFillIcon"; // Hamburger menu icon
import CloseIcon from "remixicon-react/MenuUnfoldFillIcon"; // Close menu icon

// eslint-disable-next-line react/prop-types
const Navbar = ({ isDark, toggleDark }) => {
  const [showMenu, setShowMenu] = useState(false);

  const handleMenuToggle = () => {
    setShowMenu(!showMenu);
  };

  return (
    <header
      className={`flex w-full p-4 flex-wrap ${
        isDark ? "bg-gray-900" : "bg-gray-800"
      }`}
    >
      <nav className='flex w-full items-center justify-between flex-wrap'>
        <h2 className='text-white text-2xl font-display'>DevGanCode</h2>

        {/* Hamburger menu icon */}
        <div className='block lg:hidden'>
          {showMenu ? (
            <CloseIcon
              className='text-white cursor-pointer'
              onClick={handleMenuToggle}
            />
          ) : (
            <MenuIcon
              className='text-white cursor-pointer'
              onClick={handleMenuToggle}
            />
          )}
        </div>

        {/* Links - hidden on small screens */}
        <div className='hidden lg:flex justify-evenly items-center gap-4 w-1/2 font-display text-white '>
          <Link to='/'>Home</Link>
          <Link to='/blogs'>Blogs</Link>
          <Link to='/projects'>Projects</Link>
          <Link to='/youtube'>YouTube</Link>
        </div>

        {/* Dark mode icon - always visible */}
        <div>
          {isDark ? (
            <MoonIcon
              className='text-white cursor-pointer'
              onClick={toggleDark}
            />
          ) : (
            <SunIcon
              className='text-white cursor-pointer'
              onClick={toggleDark}
            />
          )}
        </div>
      </nav>

      {/* Mobile menu - shown when hamburger menu is clicked */}
      {showMenu && (
        <div className='lg:hidden flex flex-col items-center w-full mt-4'>
          <Link to='/' className='text-white my-2'>
            Home
          </Link>
          <Link to='/blogs' className='text-white my-2'>
            Blogs
          </Link>
          <Link to='/projects' className='text-white my-2'>
            Projects
          </Link>
          <Link to='/youtube' className='text-white my-2'>
            YouTube
          </Link>
        </div>
      )}
    </header>
  );
};

export default Navbar;
