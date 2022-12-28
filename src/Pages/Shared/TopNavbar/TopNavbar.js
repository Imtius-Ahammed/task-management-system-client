import { Navbar } from 'flowbite-react';
import React from 'react';
import { Link } from 'react-router-dom';

const TopNavbar = () => {
  return (
    <div>
      <Navbar
  fluid={true}
  rounded={true}
>
  <Navbar.Brand href="https://flowbite.com/">
    <img
      src="https://flowbite.com/docs/images/logo.svg"
      className="mr-3 h-6 sm:h-9"
      alt="Flowbite Logo"
    />
    <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
      Flowbite
    </span>
  </Navbar.Brand>
  <Navbar.Toggle />
  <Navbar.Collapse>
   <Link to='/addTask'>Add Task</Link>
   <Link to='/myTask'>My Task</Link>
   <Link to='/completedTask'>Completed Task</Link>
  </Navbar.Collapse>
</Navbar>
    </div>
  );
};

export default TopNavbar;