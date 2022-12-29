import { Button, Label, Textarea, TextInput } from 'flowbite-react';
import React, { useContext } from 'react';
import { useLoaderData, useLocation, useNavigate } from 'react-router-dom';


const Update = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const taskData = useLoaderData();
  
  const handleUpdateTask= (event) => {
   
    event.preventDefault();
    const form = event.target;
  
    const name = form.name.value;
    const email = form.email.value;
    const img = form.img.value;
    const taskTitle = form.taskTitle.value;
  
    const description = form.description.value;

    const newService = {
     
      name,
      taskTitle,
      email,
      img,
    
      description,
    };
    fetch(`http://localhost:5000/update/${taskData._id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
       
      },
      body: JSON.stringify(newService),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          alert("Successfully Updated Task");
          form.reset();
          navigate('/media')
        }
      })
      .catch((er) => console.error(er));
  };
  return (
    <div>
    <h2 className='text-3xl font-bold p-5'>Update Your Task Here</h2>
    <form onSubmit={handleUpdateTask} className="flex flex-col gap-4 container mx-auto lg:w-2/5 my-10" >
<div>
  <div className="mb-2 block">
    <Label
      htmlFor="email2"
      value="Your email"
    />
  </div>
  <TextInput
    id="email2"
    type="name"
    name='name'
    placeholder="name"
    defaultValue={taskData?.name}
   
    shadow={true}
  />
</div>
<div>
  <div className="mb-2 block">
    <Label
      htmlFor="name1"
      value="Your email"
    />
  </div>
  <TextInput
    id="name1"
    type="email"
    name='email'
    placeholder="name@flowbite.com"
    defaultValue={taskData?.email}
   
    shadow={true}
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
    defaultValue={taskData?.taskTitle}
    required
    shadow={true}
  />
</div>
<div>
  <div className="mb-2 block">
    <Label
      htmlFor="img1"
      value="Task Image "
    />
  </div>
  <TextInput
    id="img1"
    type="text"
    name='img'
    defaultValue={taskData?.img}
    required={true}
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
    defaultValue={taskData?.description}
    required={true}
    shadow={true}
  />
</div>

<Button type="submit">
  Submit
</Button>
</form>
  </div>
  );
};

export default Update;<h1>This is Update</h1>