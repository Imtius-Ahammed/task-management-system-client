
import { Accordion, Button, Card } from 'flowbite-react';
import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';


const MyTask = () => {
const{user} = useContext(AuthContext);
const [allData, setData] = useState([]);

  
 
 

 
  useEffect(() => {
    
      fetch(`http://localhost:5000/allTasks/${user?.email}`)
        .then((res) => res.json())
        .then((data) => {
          setData(data)
          console.log(data)
          
        });
   
  }, []);

  
  return (
    <div>
     <div>
      
     {
        allData.map(data=><Accordion flush={true} data={data._id} alwaysOpen={true}>
          <Accordion.Panel>
            <Accordion.Title>
              
            <h5 className="text-2xl font-bold  text-gray-900 dark:text-white">
      {data.taskTitle}
    </h5>
              
            </Accordion.Title>
            <Accordion.Content>
            <div className="container mx-auto">
  <Card >
  <div className='flex  '>
   <div className='w-1/2'>
   <img className=' mx-auto' src={data.img} alt="" />
   </div>
  
  <div className='w-full'>
  <h2 className='text-3xl font-bold'>Task Description</h2>
  <textarea style={{width:"100%"}} name="" id="" cols="70" rows="10" disabled className='border-0'>{data.description}</textarea>
    <div className='flex justify-center'>
      <Button >Completed Task</Button>
    </div>
  </div>
   </div>
  </Card>
</div>
        
            </Accordion.Content>
           
          </Accordion.Panel>
         
        </Accordion>
        )
      }
     </div>
      
     
    </div>
  );
};

export default MyTask;