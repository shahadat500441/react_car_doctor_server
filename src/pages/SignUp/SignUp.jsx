import React,{useContext} from 'react';
import loginImg from "../../assets/images/login/login.svg";
import {Link } from "react-router-dom"
import { AuthContext } from '../../assets/Providers/AuthProvider';
const SignUp = () => {

    const {createUser} = useContext(AuthContext)
      const handelSignUp = (event) => {
    event.preventDefault();
    const form = event.target;
    const name= form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(name,email, password);
    createUser(email,password)
    .then(result=>{
        console.log(result.user)
    })
    .catch(error=>{
        console.error(error.message)
    })
  };
    return (
       <div className="hero  min-h-screen">
      <div className="hero-content flex-col lg:flex-row">
        <div className=" w-1/2 mr-20">
          <img src={loginImg} alt="" />
        </div>
        <div className="card bg-base-100  max-w-sm shrink-0 shadow-2xl w-1/2">
          <div className="card-body">
            <h1 className="text-5xl font-bold">Sign Up </h1>
            <form onSubmit={handelSignUp}>
              <fieldset className="fieldset">
                <label className="label">Name</label>
                <input
                  type="name"
                  name="name"
                  className="input"
                  placeholder="Name"
                />
                <label className="label">Email</label>
                <input
                  type="email"
                  name="email"
                  className="input"
                  placeholder="Email"
                />
                <label className="label">Password</label>
                <input
                  type="password"
                  name="password"
                  className="input"
                  placeholder="Password"
                />

                <button className="btn bg-[#FF3811] text-white mt-4">
                  Sign In
                </button>
              </fieldset>
            
            </form>
            <p>Already have an account? <Link to="/login" className="text-orange-600 font-bold"> Sign In</Link></p>
          </div>
        </div>
      </div>
    </div>
    );
};

export default SignUp;