
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
      {
        allData.map(data=>console.log(data))
      }
      <h1>This is My task</h1>
     
    </div>
  );
};

export default MyTask;