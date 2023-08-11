import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

export const ContactUs = () => {
  const formRef = useRef();
  const nameRef = useRef();
  const emailRef = useRef();
  const textRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    if (emailRef.current.value === "" || textRef.current.value === "") {
      console.log('empty email/textarea input');
      return;
    };

    emailjs
      .sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID, 
        formRef.current, 
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY)
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

      nameRef.current.value = ""
      emailRef.current.value = ""
      textRef.current.value = ""
  };

  return (
    <div className="container w-full h-screen p-16">
      <div className='flex grid grid-rows-12 grid-flow-row gap-5 p-10'>
        <div>
          <h1 className='flex justify-center text-white text-center text-5xl font-extrabold underline'>Reach Out To Me!</h1>
          <p className='text-center text-white mt-4'>Send me a message about anything you'd like to chat about!</p>
        </div>
        
        <div className='flex justify-center row-start-6'>
          <div className='w-3/4 h-screen'>
            <form ref={formRef} onSubmit={sendEmail} className="dark:bg-slate-500 shadow rounded px-8 pt-6 pb-8 mb-4">
        {/* *****name input*****  */}
              <div className="mb-4">
                <label className="block text-gray-700 text-lg font-bold mb-2" htmlFor="name">
                  Name
                </label>
                <input name="user_name" ref={ nameRef } className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:ring-blue-500 focus:border-blue-500" id="name" type="text" placeholder="Name" />
              </div>
        {/* *****email input*****  */}
              <div className="mb-6">
                <label className="block text-gray-700 text-lg font-bold mb-2" htmlFor="email">
                  Email
                </label>
                <input required name="user_email" ref={ emailRef } className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:ring-blue-500 focus:border-blue-500" id="email" type="email" placeholder="Email" />
              </div>
        {/* *****body input*****  */}
              <div className='mb-6'>
                <label htmlFor="message" className="block text-gray-700 text-lg font-bold mb-2">Your message</label>
                <textarea required name="message" ref={ textRef } id="message" rows="5" className="block p-2.5 w-full text-sm bg-gray-50 text-gray-700 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write your thoughts here..."></textarea>
              </div>
        {/* *****submit button*****  */}
              <div className="flex justify-center mt-4">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
