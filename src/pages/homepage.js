import React from 'react'
import { VscGithub } from "react-icons/vsc";

// Skills icons
import { AiOutlineLinkedin, AiOutlineFilePdf, AiOutlineHtml5 } from "react-icons/ai";
import { FaNodeJs, FaReact } from "react-icons/fa";
import { SiTailwindcss, SiExpress, SiPostgresql } from "react-icons/si";
import { TbBrandMongodb, TbBrandTypescript, TbBrandCss3 } from "react-icons/tb";
import { RiJavascriptLine } from "react-icons/ri";
import { BsBootstrap } from "react-icons/bs";

export default function Homepage() {

  return (
    <>
      <div className='text-white h-full p-5 sm:p-10 max-w-screen'>
        <div className='grid lg:grid-cols-2 space-x-5 space-y-5'>

          <div className='flex flex-col mx-auto justify-center items-center space-y-10'>
            <div className='flex justify-center mb-5'>
              <img className="rounded-full h-96" src={require("../profile-photo.jpeg")} alt='profile'/>
            </div>

            <div className='flex justify-center mb-10'>
              <a className='mx-2 flex flex-col items-center' href={require("../RV SWE Resume.pdf")} target='_blank' rel='noreferrer'>
                <AiOutlineFilePdf size="30" color='blue'/> 
                <strong>Resume</strong>
              </a>
              <a className='mx-2 flex flex-col items-center' href='https://github.com/ryanpv' target='_blank' rel='noreferrer'>
                <VscGithub size="30" color='orange'/>
                <strong>GitHub</strong>
              </a>
              <a className='mx-2 flex flex-col items-center' href='https://www.linkedin.com/in/ryandvoong/' target='_blank' rel='noreferrer'>
                <AiOutlineLinkedin size="30" color='blue'/>
                <strong>LinkedIn</strong>
              </a>
            </div>
            
          </div>

          <div className='max-w-screen-2xl'>
            <h1 className='flex justify-center text-4xl font-bold underline decoration-orange-400 mb-8'>RYAN VOONG</h1>
            <h3 className='text-2xl text-center font-semibold'>A full-stack software developer</h3>
            <br></br>
        
            <p className='text-center font-semibold mt-4'>
              Hello World! I'm a full-stack developer with a background in nursing. I have a passion for problem solving and developing solutions using technology. My background in nursing 
              has taught me the importance people's experiences. I hope to transfer my skills to improve the experiences of users by always trying understanding them better.
              <br></br>
              <br></br>

              {/* <strong>A little bit more about me:</strong>
              <br></br>
              I graduated from Ryerson University (now known as the Toronto Metro University) in 2016 with a Bachelors of Science in Nursing in 2016 and have been working as a nurse since. 
              I enjoy video games, anime, dogs/cats, sports, bubble tea and eating. If you enjoy any of those things as well, I'm sure we'll get along just fine!
              <br></br>
              <br></br> */}


              {/* <strong>My last project:</strong>
              <br></br>
              In my last project, I took on the task to learn how video streaming works. Using HLS format, I leveraged certain AWS services such as Cloudfront CDN, S3, and Lambda to create a video streaming server. 
              The project allows users to store and serve video content more securely while having scaling capabilities. 
              You can check out the source code here: <a href='https://github.com/ryanpv/node-video-streamer' target='_blank' rel='noreferrer'><i style={{color: "lightblue"}}>https://github.com/ryanpv/node-video-streamer</i></a> &nbsp;
              or you can take a look at the <a href='https://ryanvoong.dev/#/blogs/expressjs-video-streaming-server-with-aws' target='_blank' rel='noreferrer'><strong style={{color: "lightblue"}}>blog!</strong></a>
              <br></br>
              <br></br> */}

              <p className='font-bold'>What I'm currently working on:</p>
              <br></br>
              I am developing a beauty service app (nail services) for a personal client. This app aims to provide client users the ability to request, update, and cancel appointments through their
              own account on the site. Admin users will also have additional features/permissions for more control over appointments and the list of services available. This project is being built with Typescript ReactJS,
              Typescript ExpressJS, and PostgreSQL. The site is currently live at <a href='https://www.polishbycin.com' target='_blank' rel='noreferrer'><i style={{color: "blue"}}>https://www.polishbycin.com</i></a>. 
              If you'd like to follow along with the code progress, you can check it out here: <a href='https://github.com/ryanpv/beauty-service-app' target='_blank' rel='noreferrer'><i style={{color: "blue"}}>https://github.com/ryanpv/beauty-service-app</i></a>
              <br></br>
              <br></br>

              I'm always open to connect and have a chat so send me a message!
            </p>

            <hr className='border border-orange-400 my-5'></hr>
            
            <div className=''>
              <h3 className='text-xl font-bold text-center mb-4'>Tech stack:</h3>

              <div className='flex sm:flex-row flex-wrap gap-4 justify-center items-center'>
                <div className='grid justify-items-center font-semibold'>
                  <TbBrandTypescript size='50'/>
                  <label>Typescript</label>
                </div>

                <div className='grid justify-items-center font-semibold'>
                  <RiJavascriptLine size='50'/>
                  <label>Javascript</label>
                </div>

                <div className='grid justify-items-center font-semibold'>
                  <FaNodeJs size='50'/>
                  <label>NodeJS</label>
                </div>

                <div className='grid justify-items-center font-semibold'>
                  <FaReact size='50' />
                  <label>ReactJS</label>
                </div>

                <div className='grid justify-items-center font-semibold'>
                  <SiExpress size='50'/>
                  <label>ExpressJS</label>
                </div>

                <div className='grid justify-items-center font-semibold'>
                  <SiPostgresql size='50'/>
                  <label>PostgreSQL</label>
                </div>

                <div className='grid justify-items-center font-semibold'>
                  <TbBrandMongodb size='50'/>
                  <label>MongoDB</label>
                </div>

                <div className='grid justify-items-center font-semibold'>
                  <AiOutlineHtml5 size='50'/>
                  <label>HTML</label>
                </div>

                <div className='grid justify-items-center font-semibold'>
                  <SiTailwindcss size='50'/>
                  <label>TailwindCSS</label>
                </div>

                <div className='grid justify-items-center font-semibold'>
                  <BsBootstrap size='50'/>
                  <label>Bootstrap</label>
                </div>

                <div className='grid justify-items-center font-semibold'>
                  <TbBrandCss3 size='50'/>
                  <label>CSS</label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
