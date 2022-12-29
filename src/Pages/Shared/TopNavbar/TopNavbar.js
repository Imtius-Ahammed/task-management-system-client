import { Navbar } from 'flowbite-react';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';


const TopNavbar = () => {
  const {user,logOut} = useContext(AuthContext);
  
  
  const menuItems = <>
  <li><Link to='/'>Home</Link></li>
 
  {
    user?.uid ?
    <>
    <li><Link to='/completedTask'>Completed Task</Link></li>
    <li><Link to='/myTask'>My Task</Link></li>
    <li><Link to='/addTask'>AddTask</Link></li>
    <li><Link to='/Media'>Media</Link></li>
     
     <button onClick={logOut}>LogOut</button>
    </>
    
    :
    <>
     
     <li><Link to='/login'>Login</Link></li>
     <li><Link to='/register'>Register</Link></li>
    </>
    
    }
  </>
  return (
    <div>
      <Navbar className='bg-sky-200'
  fluid={true}
  rounded={true}
>
  <Navbar.Brand>
    <img
      src={user?.photoURL}
      className="mr-3 h-6 sm:h-9"
      alt="Logo"
    />
    <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
      TMS
    </span>
  </Navbar.Brand>
  <Navbar.Toggle />
  <Navbar.Collapse>
   {menuItems}
  </Navbar.Collapse>
</Navbar>
    </div>
  );
};

export default TopNavbar;