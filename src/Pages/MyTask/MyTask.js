
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
    
    <div className='container mx-auto '>
      {
        dailyTasks.map(tasks=><Card className='mb-3' key={tasks._id}>
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
           {tasks.taskTitle}
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
           {tasks.description}
          </p>
          <div className='flex justify-center'>
          <Link to='/completedTask'> {tasks?.role==='taskCompleted' ? <><Button>Completed</Button>  </>: <Button onClick={()=>handleCompleted(tasks._id)}  >Complete Task</Button> }
          
          
          </Link>
          </div>
        </Card>)

      }
     </div>
      
     
    </div>
  );
};

export default MyTask;