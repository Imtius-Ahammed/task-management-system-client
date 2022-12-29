
import {  Button, Card } from 'flowbite-react';
import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';


const MyTask = () => {
const{user} = useContext(AuthContext);
const [dailyTasks, setDailyTasks] = useState([]);


 
  useEffect(() => {
    
      fetch(`http://localhost:5000/dailyTasks/${user?.email}`)
        .then((res) => res.json())
        .then((data) => {
          setDailyTasks(data)
          console.log(data)
          
        });
   
  }, []);

  const handleCompleted = (id) => {
    fetch(
      `http://localhost:5000/dailyTasks/${id}`,
      {
        method: "PUT",
       
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          alert("Task Completed successfully.");
          
        }
      });
  };

  
  return (
    <div>
    
    <div className='container mx-auto my-10  grid lg:grid-cols-2 grid-cols-1 lg:h-96 '>
      {
        dailyTasks.map(tasks=><Card className='m-3 shadow-xl shadow-green-300 bg-sky-200 rounded-2xl ' key={tasks._id}>
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
           {tasks.taskTitle}
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
           {tasks.description}
          </p>
          <div className='flex justify-center'>
          <Link to='/completedTask'> {tasks?.role==='taskCompleted' ? <><Button className='text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2'>Completed</Button>  </>: <Button className='text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2' onClick={()=>handleCompleted(tasks._id)}  >Complete Task</Button> }
          
          
          </Link>
          </div>
        </Card>)

      }
     </div>
      
     
    </div>
  );
};

export default MyTask;