import { Button, Card } from 'flowbite-react';
import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const CompletedTask = () => {
  const{user} = useContext(AuthContext);
const [dailyTasks, setDailyTasks] = useState([]);


 
  useEffect(() => {
    
      fetch(`http://localhost:5000/daily/taskCompleted`)
        .then((res) => res.json())
        .then((data) => {
          setDailyTasks(data)
          console.log(data)
          
        });
   
  }, []);




  const handleDeleteTask = (task) => {
    console.log(task);

    fetch(
      `http://localhost:5000/dailyTasks/${task._id}`,
      {
        method: "DELETE",
      
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          
          alert(`${task.taskTitle} deleted successfully`);
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
            <Button onClick={()=>handleDeleteTask(tasks)} className='text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2'>Delete</Button>
          
          </div>
         
        </Card>)

      }
     </div>
     <div className='flex justify-center'>
            <Link to='/myTask'><Button>Not Complete</Button></Link>
          </div>
     
  
    </div>
  );
};

export default CompletedTask;