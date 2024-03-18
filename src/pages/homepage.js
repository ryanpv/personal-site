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
      <div className='text-white h-full p-3 sm:p-10 max-w-screen'>
        <div className='grid lg:grid-cols-2 space-y-5'>

          <div className='flex flex-col mx-auto space-y-10 mt-5 mb-10'>
            <div>
              <h1 className='flex justify-center text-4xl font-bold underline decoration-orange-400'>Ryan Voong</h1>
              <h3 className='text-2xl text-center font-semibold'>Full-stack software developer</h3>
            </div>

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
            <h1 className='text-center text-4xl font-bold underline decoration-orange-400'>Welcome friends</h1>
            <br></br>
        
            <p className='font-semibold mt-4'>
              I am a full-stack software developer with background experience as a Registered Nurse! With a passion for solving problems and continuous learning, I look to leverage my background alongside technology to better user experiences.
              <br></br>
              <br></br>

              <p className='text-center font-bold'>What I'm currently working on:</p>
              I am developing a beauty service app (nail services) for a personal client. This app provides customers the ability to request, update, and cancel appointments through their
              own account on the site. The site is currently live at <a href='https://www.polishbycin.com' target='_blank' rel='noreferrer'><i style={{color: "blue"}}>https://www.polishbycin.com</i></a>. 
              If you'd like to follow along with the code progress, you can check it out here: <a href='https://github.com/ryanpv/beauty-service-app' target='_blank' rel='noreferrer'><i style={{color: "blue"}}>https://github.com/ryanpv/beauty-service-app</i></a>
              <br></br>
              <br></br>

              I'm always open to connect and have a chat so send me a message!
            </p>

            <hr className='border border-orange-400 my-5'></hr>
            
            <div className='mb-10'>
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
