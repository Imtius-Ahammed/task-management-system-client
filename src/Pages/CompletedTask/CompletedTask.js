import { Button, Card, Label, Textarea } from 'flowbite-react';
import React, { useContext, useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const CompletedTask = () => {
  const{user} = useContext(AuthContext);
const [dailyTasks, setDailyTasks] = useState([]);
const location = useLocation();
  const navigate = useNavigate();


 
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
          navigate('/completedTask')
        }
      });
  };
  return (
    <div>
      
    
    <div className='container mx-auto my-10  grid lg:grid-cols-2 grid-cols-1 lg:h-96'>
      {
        dailyTasks.map(tasks=><Card className='m-2 shadow-xl shadow-orange-300' key={tasks._id}>
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white ">
           {tasks.taskTitle}
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
           {tasks.description}
          </p>
          <div className='flex justify-center'>
            <Button onClick={()=>handleDeleteTask(tasks)} className='text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2'>Delete</Button>

          
          </div>
          <div>
            <Label>Comments</Label>
            <Textarea></Textarea>
            <div className='flex justify-center p-3'><Button>Submit</Button></div>

          </div>
         
        </Card>)

      }
     </div>
     <div className='flex justify-center mb-10 '>
            <Link to='/myTask'><Button>Not Complete</Button></Link>
          </div>
     
  
    </div>
  );
};

export default CompletedTask;