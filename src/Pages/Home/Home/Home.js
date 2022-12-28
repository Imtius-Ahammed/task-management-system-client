import { Button, Label, Textarea, TextInput } from 'flowbite-react';
import React, { useContext } from 'react';
import { Form, Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import Banner from '../Banner/Banner';

const Home = () => {
  const{user}=useContext(AuthContext);
  const handleDailyTask = (event) => {
    
   
    event.preventDefault();
    const form = event.target;
    const taskTitle = form.taskTitle.value;
    const dateTime = form.dateTime.value;
    const email = form.email.value;
    const description = form.description.value;

    const newTasks = {
      taskTitle,
      description,
      email,
      dateTime
    };
    fetch("http://localhost:5000/dailyTasks", {
      method: "POST",
      headers: {
        "content-type": "application/json",
       
      },
      body: JSON.stringify(newTasks),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          alert("Successfully Addeded Daily Task");
          form.reset();
        }
      })
      .catch((er) => console.error(er));
  };

  return (
    <div>
     
      <Banner></Banner>
      <Form onSubmit={handleDailyTask}>
      <div className='pt-4 container mx-auto lg:w-2/5 rounded-xl p-5 m-5 shadow-xl shadow-blue-200 '>
        <h3>Enter your Task</h3>
        <div>
    <div className="mb-2 block">
      <Label
        htmlFor="email"
        value="Email"
      />
    </div>
    <input className='mb-2 ' type="datetime-local" required name="dateTime" id="" />
    <TextInput
    name='email'
     defaultValue={user?.email}
     readOnly
     
    />

  </div>
        <div>
    <div className="mb-2 block">
      <Label
        htmlFor="taskTitle"
        value="Task title"
      />
    </div>
    <TextInput
      id="taskTitle"
      type="text"
      name='taskTitle'
      placeholder="..."
      required
      shadow={true}
    />
   
  </div>
  <div>
    <div className="mb-2 block">
      <Label
        htmlFor="description"
        value="description"
      />
    </div>
    <Textarea
      id="description"
      type="text"
      name='description'
      required={true}
      shadow={true}
    />
  </div>
     {/* <input className='btn btn-primary' type="submit" value="Submit" /> */}
     <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
       
      </div>
      </Form>
     <div>
     <Link to='/myTask'> <h1 className='text-5xl font-bold p-5 underline'>View Details</h1></Link>
     </div>
      
    </div>
  );
};

export default Home;