import { Button, Label, TextInput } from 'flowbite-react';
import React, { useContext, useState } from 'react';
import { FaGoogle } from 'react-icons/fa';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const Register = () => {
  const {createUser, updateUser} = useContext(AuthContext);
  const[error,setError] =useState(null);

  const handleRegister = event=>{
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const photoURL = form.photoURL.value;
    const password = form.password.value;

    createUser(email,password)
    .then(result=>{
      const user = result.user;
      if(user){
        alert('Registration Successful')
      }
      setError('');
      form.reset();
      handleUpdateUser(name,photoURL);

    })
    .catch(error => {

      console.error(error);
      setError(error.message)
    });

    const handleUpdateUser =(name,photoURL)=>{
      const profile = {
        displayName: name,
        photoURL: photoURL
      }
      updateUser(profile)
      .then(()=>{})
      .catch(error=>console.error(error));
    }

  }
  return (
    <div>
       <div className="grid lg:grid-cols-2 grid-cols-1 m-5 p-3 container mx-auto ">
        <div >
          <h1>Hello</h1>

        </div>
        <div >
        <form onSubmit={handleRegister} className="flex flex-col gap-4 border p-5">
  <div>
    <div className="mb-2 block">
      <Label
        htmlFor="title"
        value="Your name"
      />
    </div>
    <input type="text" name='name' />
  </div>
  <div>
    <div className="mb-2 block">
      <Label
        htmlFor="email1"
        value="Your email"
      />
    </div>
    <TextInput
        name="email"
        type="email"
        placeholder="email"
        className="input input-bordered"
       
      required={true}
    />
  </div>
  <div>
    <div className="mb-2 block">
      <Label
        htmlFor="password1"
        value="Your password"
      />
    </div>
    <TextInput
      name="password"
      type="password"
      placeholder="password"
      required={true}
    />
  </div>
  <div>
    <div className="mb-2 block">
      <Label
        htmlFor="img1"
        value="Your Image"
      />
    </div>
    <TextInput
      name="photoURL"
      type="text"
      placeholder="image"
      required={true}
    />
  </div>
 
  <Button type="submit">
    Submit
  </Button>
</form>
<div className="flex justify-evenly  mt-6">
                    <div className="flex flex-col items-center">
                      <div>
                      {/* <FaGoogle onClick={handleGoogleSignIn} className='cursor-pointer text-3xl '></FaGoogle> */}

                      </div>
                      <div>
                      Google
                      </div>
                     
                    </div>
        </div>
     
                  </div>

      </div>
    </div>
  );
};

export default Register;