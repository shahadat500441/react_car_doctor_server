// import React from 'react';

import { useLoaderData } from "react-router-dom";
import { useContext } from 'react';
import { AuthContext } from './../../assets/Providers/AuthProvider';
const CheckOut = () => {
  const service = useLoaderData();
  const { title, price,_id,img } = service;
  const {user}= useContext(AuthContext)

  const handelSubmit = event =>{
    event.preventDefault();
    const form = event.target;
    const name=form.name.value;
    const date = form.date.value;
    const email=form.email.value;
    const booking={
        customerName:name,
        email,
        img,
        date,
        service: title,
        service_id: _id,
        price
    }
    console.log(booking)
    fetch("http://localhost:5000/bookings",{
        method:"POST",
        headers:{
            "content-type": "application/json"
        },
        body:JSON.stringify(booking)
    })
    .then(res=>res.json())
    .then(data=>{
        console.log(data)
      if(data.insertedId){
     alert("booking successful")
      }
    })

  }
  return (
    <div>
      <h2 className="text-center font-bold mb-2">Booking: {title}</h2>

      <div className="hero min-h-screen">
        <div className="hero-content flex-col ">
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <div className="card-body">
              <form onSubmit={handelSubmit}>
                <fieldset className="fieldset">
                  <label className="label">Name</label>
                  <input
                    type="text"
                    className="input"
                    name="name"
                    placeholder="name"
                    defaultValue={user?.displayName}
                  />
                  <label className="label">Date</label>
                  <input
                    type="date"
                    className="input"
                    placeholder="date"
                    name="date"
                  />
                  <label className="label">Email</label>
                  <input
                    type="email"
                    className="input"
                    placeholder="Email"
                    name="email"
                    defaultValue={user?.email}
                  />
                  <label className="label">Due Amount</label>
                  <input type="text" className="input" defaultValue={price} />

                  <button className="btn btn-neutral mt-4">order Conform</button>
                </fieldset>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckOut;
