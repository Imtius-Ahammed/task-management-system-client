import {  GithubAuthProvider, GoogleAuthProvider } from "firebase/auth";
import React, { useContext, useState } from "react";
import { Form, Link, useLocation, useNavigate } from "react-router-dom";

import { FaGoogle, FaGithub, FaUserAlt } from "react-icons/fa";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";
import { Button, Label, TextInput } from "flowbite-react";



const Login = () => {
  const [error, setError] = useState(null);


  const { signIn, providerLogin } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const googleProvider = new GoogleAuthProvider();
  const from = location.state?.from?.pathname || "/";

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    if (password.length < 6) {
      setError("Password should be 6 characters long");
      return;
    }

    signIn(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        if (user) {
          alert('Sign In Successfully')
        }

        setError("");
        form.reset();

        const currentUser = {
          email: user.email,
        };
        console.log(currentUser);

       
      })
      .catch((error) => console.error(error));
  };

  const handleGoogleSignIn = () => {
    providerLogin(googleProvider)
      .then((result) => {
        const user = result.user;
        console.log(user);
        alert('Sign In Successfully')
        navigate(from, { replace: true });

      })
      .catch((error) => {
        console.error(error);
        setError(error.message);
      });
  };
  return (
    <div>
      <div className="grid lg:grid-cols-2 grid-cols-1 items-center m-5 p-3 container mx-auto ">
        <div >
         
          <img src="https://img.freepik.com/free-vector/tablet-login-concept-illustration_114360-7963.jpg?w=826&t=st=1672222851~exp=1672223451~hmac=754c38acecb95a764e0fe3b5b74e9c2fc2515d364c1465633e6e892b32e81f91" alt="" />

        </div>
        <div >
        <form onSubmit={handleLogin} className="flex flex-col gap-4  lg:w-3/5  mx-auto p-5">
  <div>
    <div className="mb-2 block ">
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
 
  <Button type="submit">
    Submit
  </Button>
</form>
<div className="flex justify-evenly  mt-6">
                    <div className="flex flex-col items-center">
                      <div>
                      <FaGoogle onClick={handleGoogleSignIn} className='cursor-pointer text-3xl '></FaGoogle>

                      </div>
                      <div>
                      Google
                      </div>
                     
                    </div>
        </div>
     
                  </div>

      </div>
      
      

      {/* <Form onSubmit={handleSignIn}>
        <div className="hero min-h-screen bg-base-200">
          <div className="hero-content  flex flex-col">
            <div className="text-center lg:text-left">
              <h1 className="text-5xl font-bold mb-5">Login now!</h1>
            </div>

            <div className="card flex-shrink-0 w-full lg:w-screen max-w-2xl shadow-2xl shadow-info bg-base-100">
              <div className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    name="email"
                    type="email"
                    placeholder="email"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    name="password"
                    type="password"
                    placeholder="password"
                    className="input input-bordered"
                    required
                  />
                  <label className="label">
                  Don't have any Account?
                   
                      
                      <div className="form-control">
                        <label className="label cursor-pointer">
                          <span className="label-text m-2">Register</span>
                          <Link to="/register" className=" link link-hover text-sm">
                          <input
                            type="checkbox"
                            className="toggle toggle-secondary hover:bg-black"
                           
                          />
                          </Link>
                        </label>
                      </div>
                    
                  </label>
                </div>
                <div className="form-control mt-6">
                  <button className="btn bg-sky-400 border-0 gap-2">
                    <FaUserAlt></FaUserAlt> Login
                  </button>
                  <div className="flex justify-evenly  mt-6">
                    <div className="flex flex-col items-center">
                      <div>
                      <FaGoogle onClick={handleGoogleLogin} className='cursor-pointer text-3xl '></FaGoogle>

                      </div>
                      <div>
                      Google
                      </div>
                     
                    </div>


                    <div className="flex flex-col items-center">
                      <div>
                      <FaGithub onClick={handleGithubSignIn} className='cursor-pointer text-3xl '></FaGithub>

                      </div>
                      <div>
                      GitHub
                      </div> 
                    </div>
                  </div>


                  <div><h2 className="text-center font-bold mt-5">Thanks for Being With us!!</h2></div>


                  <div className="toast">
                    <div className="alert alert-info bg-red-500">
                      <div>
                        <span className="text-2xl font-medium">{error}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Form> */}
    </div>
  );
};

export default Login;