import React from 'react';
import person  from  "../../../assets/images/about_us/person.jpg"
import parts  from  "../../../assets/images/about_us/parts.jpg"

const About = () => {
    return (
       <div className="hero min-h-screen my-12">
  <div className="hero-content flex-col lg:flex-row">
   <div className="lg:w-1/2     relative">
     <img
      src={person}
      className="max-w-sm rounded-lg shadow-2xl h-[470px] object-cover"
    />
     <img
      src={parts}
      className="max-w-sm rounded-lg shadow-2xl h-[330px ] object-cover absolute right-16 top-2/3 border-8 border-white"
    />
   </div>
    <div className="lg:w-1/2 space-y-2">
    <h2 className="text-[#FF3811] font-medium">About Us</h2>
      <h1 className="text-5xl font-bold">We are qualified <br />  & of experience <br /> in this field</h1>
      <p className="py-6">
        There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. .
      </p>
      <p>the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
      <button className="btn bg-[#FF3811] text-white mt-5">Get More Info</button>
    </div>
  </div>
</div>
    );
};

export default About;