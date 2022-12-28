import { Button, Label, Textarea, TextInput } from 'flowbite-react';
import React, { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const AddTask = () => {
  const{user}=useContext(AuthContext);
  const handleAddTask = (event) => {
   
    event.preventDefault();
    const form = event.target;
  
    const name = form.name.value;
    const email = form.email.value;
    const img = form.img.value;
  
    const description = form.description.value;

    const newService = {
     
      name,
      email,
      img,
    
      description,
    };
    fetch("http://localhost:5000/addTask", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        // authorization: `Bearer ${localStorage.getItem("genius-token")}`,
      },
      body: JSON.stringify(newService),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          alert("Successfully Addeded Service");
          form.reset();
        }
      })
      .catch((er) => console.error(er));
  };
  return (
    <div>
      <h2>This si add task</h2>
      <form className="flex flex-col gap-4 container mx-auto lg:w-2/5" onSubmit={handleAddTask}>
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
      defaultValue={user?.displayName}
      readOnly
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
      defaultValue={user?.email}
      readOnly
      shadow={true}
    />
  </div>
  <div>
    <div className="mb-2 block">
      <Label
        htmlFor="img1"
        value="Your password"
      />
    </div>
    <TextInput
      id="img1"
      type="text"
      name='img'
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

export default AddTask;