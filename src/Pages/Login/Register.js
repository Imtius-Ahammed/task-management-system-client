import { Button, Label, TextInput } from 'flowbite-react';
import React, { useContext, useState } from 'react';
import { FaGoogle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const Register = () => {
  const {createNewUser, updateUser} = useContext(AuthContext);
  const[error,setError] =useState(null);

  const handleRegister = event=>{
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const photoURL = form.photoURL.value;
    const password = form.password.value;

    createNewUser(email,password)
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
       <div className="grid lg:grid-cols-2 items-center grid-cols-1 m-5 p-3 container mx-auto ">
        <div >
         
          <img src="https://img.freepik.com/free-vector/cartoon-character-filling-form-survey-checklist-man-writing-test-signing-business-medical-document-flat-illustration_74855-20483.jpg?w=1060&t=st=1672222602~exp=1672223202~hmac=577b74f1fa9b89f08bd980941258017712ead2d7fe60bb0b721ac74e3482d872" alt="" />

        </div>
        <div >
        <form onSubmit={handleRegister} className="flex flex-col gap-4 lg:w-3/5 p-5 mx-auto">
          <h1 className='text-2xl font-bold'>Register Now!!</h1>
  <div>
    <div className="mb-2 block">
      <Label
        htmlFor="name"
        value="Your name"
      />
    </div>
   <TextInput name='name' type='text' className='input input-bordered' required={true}></TextInput>
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
  <Link className='underline text-red-500' to='/login'>Already Have an Account?</Link>
 
  <Button type="submit">
    Register
  </Button>
</form>

     
                  </div>

      </div>
    </div>
  );
};

export default Register;