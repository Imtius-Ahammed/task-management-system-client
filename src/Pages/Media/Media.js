import { Accordion, Button, Card } from 'flowbite-react';
import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const Media = () => {
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
          allData.map(data=><Accordion  className="container mx-auto" flush={true} data={data._id} alwaysOpen={true}>
            <Accordion.Panel>
              <Accordion.Title>
        <div className='flex justify-center'>
                  
        <h5 className="text-2xl font-bold  text-gray-900 dark:text-white">
        {data.taskTitle}
      </h5>
        </div>
                
              </Accordion.Title>
              <Accordion.Content>
              <div >
    <Card >
    <div className='flex  '>
     <div className='w-1/2'>
     <img className=' mx-auto' src={data.img} alt="" />
     </div>
    
    <div className='w-full'>
    <h2 className='text-3xl font-bold'>Task Description</h2>
    <textarea style={{width:"100%"}} name="" id="" cols="70" rows="10" disabled className='border-0'>{data.description}</textarea>
      <div className='flex justify-center'>
       <Link to='/completedTask'> <Button >Completed Task</Button></Link>
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

export default Media;