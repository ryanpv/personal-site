import React from 'react'
import { AiOutlineLinkedin, AiOutlineFilePdf } from "react-icons/ai";
import { VscGithub } from "react-icons/vsc";

export default function Homepage() {

  return (
    <>
      <div className='container mt-10 text-white h-full p-10'>
        <div className='grid w-full'>
          <div className='flex justify-center mb-5'>
            <img className="rounded-full h-60" src={require("../profile-photo.jpeg")} alt='profile'/>
          </div>

          <div className='flex justify-center mb-10'>
            <a className='mx-2 flex flex-col items-center' href={require("../RV SWE Resume.pdf")} target='_blank' rel='noreferrer'>
              <AiOutlineFilePdf size="30" /> 
              <strong>Resume</strong>
            </a>
            <a className='mx-2 flex flex-col items-center' href='https://github.com/ryanpv' target='_blank' rel='noreferrer'>
              <VscGithub size="30" />
              <strong>GitHub</strong>
            </a>
            <a className='mx-2 flex flex-col items-center' href='https://www.linkedin.com/in/ryandvoong/' target='_blank' rel='noreferrer'>
              <AiOutlineLinkedin size="30" />
              <strong>LinkedIn</strong>
            </a>
          </div>

          <div>
            <h1 className='flex justify-center text-5xl font-bold underline'>RYAN VOONG</h1>
            <br></br>
        
            <p className='text-center mt-4'>
              Hello World! I'm a full-stack developer with a bit more focus on backend development as I enjoy working with data, databases, servers, and apis.
              I currently work as a Registered Nurse in the Greater Toronto Area of Ontario, Canada, but currently looking to transition into a full-time software developer.
              I love technology, solving puzzles and also enjoy learning new things to improve myself, which is what made me gravitate towards software development. 
              As a software developer, I am seeking for more opportunities to improve my skills and develop better software while learning how to elevate those around me.
              <br></br>
              <br></br>

              <strong>A little bit more about me:</strong>
              <br></br>
              I graduated from Ryerson University (now known as the Toronto Metro University) in 2016 with a Bachelors of Science in Nursing in 2016 and have been working as a nurse since. 
              I enjoy video games, anime, dogs/cats, sports, bubble tea and eating. If you enjoy any of those things as well, I'm sure we'll get along just fine!
              <br></br>
              <br></br>


              <strong>My last project:</strong>
              <br></br>
              In my last project, I took on the task to learn how video streaming works. Using HLS format, I leveraged certain AWS services such as Cloudfront CDN, S3, and Lambda to create a video streaming server. 
              The project allows users to store and serve video content more securely while having scaling capabilities. 
              You can check out the source code here: <a href='https://github.com/ryanpv/node-video-streamer' target='_blank' rel='noreferrer'><i style={{color: "lightblue"}}>https://github.com/ryanpv/node-video-streamer</i></a> &nbsp;
              or you can take a look at the <a href='https://ryanvoong.dev/#/blogs/expressjs-video-streaming-server-with-aws' target='_blank' rel='noreferrer'><strong style={{color: "lightblue"}}>blog!</strong></a>
              <br></br>
              <br></br>

              <strong>What I'm currently working on:</strong>
              Currently, I am developing a beauty service app (nail services) for a personal client. This app aims to provide client users the ability to request, update, and cancel appointments through their
              own account on the site. Admin users will also have additional features/permissions for more control over appointments and the list of services available. This project is being built with Typescript ReactJS,
              Typescript ExpressJS, and PostgreSQL. You can follow along with my progress here: <a href='https://github.com/ryanpv/beauty-service-app' target='_blank' rel='noreferrer'><i style={{color: "lightblue"}}>https://github.com/ryanpv/beauty-service-app</i></a>
              <br></br>
              <br></br>

              I'm always open to connect and have a chat so send me a message!
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
