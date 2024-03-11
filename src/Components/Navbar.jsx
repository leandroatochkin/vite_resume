import React, { useState } from 'react';
import { textoNavbarEn, textoNavbarEs } from './../assets/textos';
import { Link, useLocation } from 'react-router-dom';
import AddIcCallTwoToneIcon from '@mui/icons-material/AddIcCallTwoTone';
import WorkspacePremiumTwoToneIcon from '@mui/icons-material/WorkspacePremiumTwoTone';
import CollectionsBookmarkTwoToneIcon from '@mui/icons-material/CollectionsBookmarkTwoTone';
import AccountCircleTwoToneIcon from '@mui/icons-material/AccountCircleTwoTone';
import ArrowCircleDownTwoToneIcon from '@mui/icons-material/ArrowCircleDownTwoTone';
import ArrowCircleUpTwoToneIcon from '@mui/icons-material/ArrowCircleUpTwoTone';

const Navbar = ({ lang, mode }) => {
  const location = useLocation();
  const [collapsed, setCollapsed] = useState(true);

  const toggleCollapse = () => {
    setCollapsed(!collapsed);
  };

  return (
    <div className={`${mode == 'light' ? 'bg-white' : 'bg-slate-800'}  font-bold shadow-md w-full`}>
      <nav>
        <ul className={`blue-gradient_text m-0 p-0 overflow-hidden flex flex-col justify-center sm:flex-row  transition-all duration-300 ${collapsed ? 'max-h-0 opacity-0' : 'max-h-60 opacity-100'}`}>          
          <li>
            <Link to='/' className={`block text-center px-4 py-4 ${location.pathname === '/' ? 'text-red-500' : ''} shadow-sm`}>
              {lang === 'en' ? textoNavbarEn[4] : textoNavbarEs[4]} <AccountCircleTwoToneIcon />
            </Link>
          </li>
          <li>
            <Link to='/projects' className={`block text-center px-4 py-4 ${location.pathname === '/projects' ? 'text-red-500' : ''} shadow-sm`}>
              {lang === 'en' ? textoNavbarEn[1] : textoNavbarEs[1]} <CollectionsBookmarkTwoToneIcon />
            </Link>
          </li>
          <li>
            <Link to='/certificates' className={`block text-center px-4 py-4 ${location.pathname === '/certificates' ? 'text-red-500' : ''} shadow-sm`}>
              {lang === 'en' ? textoNavbarEn[2] : textoNavbarEs[2]} <WorkspacePremiumTwoToneIcon />
            </Link>
          </li>
          <li>
            <Link to='/contact' className={`block text-center px-4 py-4 ${location.pathname === '/contact' ? 'text-red-500' : ''} shadow-sm`}>
              {lang === 'en' ? textoNavbarEn[3] : textoNavbarEs[3]} <AddIcCallTwoToneIcon />
            </Link>
             <AddIcCallTwoToneIcon />
          </li>
        </ul>
        <button className={`flex items-center sm:hidden text-red-500`} onClick={toggleCollapse}>
          <div className="flex mx-auto"> {/* Updated to use mx-auto for horizontal centering */}
            {collapsed ? <ArrowCircleDownTwoToneIcon /> : <ArrowCircleUpTwoToneIcon/>}
          </div>
        </button>
      </nav>
    </div>
  );
};

export default Navbar;














