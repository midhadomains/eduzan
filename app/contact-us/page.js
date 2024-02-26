"use client";

import React, { useState } from 'react';
import Navbar from '../../components/SiteHeader';
import Footer from '../../components/SiteFooter';

const Alert = ({ message, type }) => {
  return (
    <div className={`flex bg-${type}-100 rounded-lg p-4 mb-4 text-sm text-${type}-700`} role="alert">
      <svg className="w-5 h-5 inline mr-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path></svg>
      <div>
        <span className="font-medium">{type} alert!</span> {message}
      </div>
    </div>
  );
};

const MyComponent = () => {
  const [showAlert, setShowAlert] = useState(false);
  const [resultMessage, setResultMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
  
    // Get form data
    const formData = new FormData(event.target);
    const name = formData.get('Name');
    const email = formData.get('email');
    const phone = formData.get('phone');
    const message = formData.get('message');
  
    // Validate form data
    if (!name || !email || !phone || !message) {
      setErrorMessage('Please fill in all fields.');
      return;
    }

    setShowAlert(true);
    setResultMessage(' Query Submitted successfully , We will get contact you shortly!');
  

  };
  return (
    <>
     <Navbar/>
    <div className="flex justify-center items-center w-screen  bg-white">
      <div className="container sm:mt-3 mx-auto my-3 px-4 lg:px-20">
        <div className="w-full p-8 my-4 md:px-12 lg:w-9/12 lg:pl-20 lg:pr-40 mr-auto rounded-2xl shadow-2xl">
          <div className="flex">
            <h1 className="font-bold uppercase lg:text-3xl sm:text-2xl">Contact us</h1>
          </div>
          <form
            action="https://api.web3forms.com/submit"
            method="POST"
            className="grid grid-cols-1 gap-5 md:grid-cols-2 mt-5"
          >
          <input type="hidden" name="access_key" value="e2deee0c-855f-4ae1-a513-eadd701a4eae" />
          {/* chnage value to whatever page you want to redirect after submitting the form */}
          <input type="hidden" name="redirect" value="https://eduzan.vercel.app/contact-us"></input>
            <input
              type="text"
              name="Name"
              placeholder="Name*"
              className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email*"
              className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
              required
            />
            <input
            type="phone-number"
            name="phone"
            placeholder="Phone*"
            className="w-full my-20 bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
            required
            />
            <textarea
              name="message"
              placeholder="Message*"
              className="w-full h-32 bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
              required
            ></textarea>
          
          <div className="my-3 ">
            <button type="submit" className="uppercase text-sm font-bold tracking-wide bg-[#8e1c1c] hover:bg-[#6a1c1a] text-gray-100 p-3 rounded-lg w-full focus:outline-none focus:shadow-outline">
              Submit
            </button>
          </div>

        </form>
        {showAlert && <Alert message={resultMessage} type="green" />}
        </div>
        
        <div
				className="w-full lg:-mt-96 lg:w-2/6 px-8 py-12 ml-auto bg-[#8e1c1c] rounded-2xl">
				<div className="flex flex-col text-white">
					<h1 className="font-bold uppercase text-3xl my-4">Contact Us</h1>
					<p className="text-gray-400">Any questions regarding the courses or career? Please feel free to contact us.
					</p>
          <div className="flex my-4 w-2/3 lg:w-1/2">
            <div className="flex flex-col">
              <i className="fas fa-phone-alt pt-2 pr-2" />
            </div>
            <div className="flex flex-col">
              <h2 className="text-2xl">Call & Mail Us</h2>
              <p className="text-gray-400">+91 91551 99555</p>
              <p className="text-gray-400">midhafin@gmail.com</p>
            </div>
          </div>
          
          <div className="flex my-4 w-2/3 lg:w-1/2">
            <a href="https://www.facebook.com/MidhaFin" target="_blank" rel="noreferrer" className="rounded-full bg-white h-8 w-8 inline-block mx-1 text-center pt-1">
              <i className="fab fa-facebook-f text-blue-900" />
            </a>
            <a href="https://www.linkedin.com/company/midhafin/" target="_blank" rel="noreferrer" className="rounded-full bg-white h-8 w-8 inline-block mx-1 text-center pt-1">
            <i className="fab fa-linkedin-in text-[#0077b5]"></i>
            </a>
            <a href="https://www.instagram.com/midhafin/" target="_blank" rel="noreferrer" className="rounded-full bg-white h-8 w-8 inline-block mx-1 text-center pt-1">
              <i className="fab fa-instagram " style={{backgroundImage: 'radial-gradient(circle at 33% 100%, #fed373 4%, #f15245 30%, #d92e7f 62%, #9b36b7 85%, #515ecf)',WebkitBackgroundClip: 'text',
              color: 'transparent'}}></i>
            </a>

          </div>
          <div className="flex my-4 w-2/3 lg:w-1/2">
          <h3 className="text-2xl">Send us a message</h3>
          
          </div>
          <div className="flex  w-2/3 lg:w-1/2">
          <a href="https://api.whatsapp.com/send?phone=123456789" target="_blank" rel="noreferrer" className="rounded-full bg-white h-8 w-8 inline-block mx-1 text-center pt-1">
          <i className="fab fa-whatsapp text-[#128C7E]" ></i>
          </a>
          </div>
        </div>
      </div>
        </div>
      <div id='result' className='text-gray-500'></div>
    </div>
    <Footer/>
    </>
  );
};

export default MyComponent;
