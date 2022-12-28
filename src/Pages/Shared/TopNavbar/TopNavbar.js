import { Navbar } from 'flowbite-react';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';


const TopNavbar = () => {
  const {user,providerLogOut} = useContext(AuthContext);
  
  
  const menuItems = <>
  <li><Link to='/'>Home</Link></li>
  <li><Link to='/myTask'>My Task</Link></li>
  <li><Link to='/addTask'>AddTask</Link></li>
  {
    user?.uid ?
    <>
    <li><Link to='/completedTask'>Completed Task</Link></li>
     
     <button onClick={providerLogOut}>LogOut</button>
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
      <Navbar
  fluid={true}
  rounded={true}
>
  <Navbar.Brand>
    <img
      src={user?.photoURL}
      className="mr-3 h-6 sm:h-9"
      alt="Flowbite Logo"
    />
    <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
      Flowbite
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