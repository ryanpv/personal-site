import React from 'react'
import { VscGithub } from "react-icons/vsc";

// Skills icons
import { AiOutlineLinkedin, AiOutlineFilePdf, AiOutlineHtml5 } from "react-icons/ai";
import { FaNodeJs, FaReact } from "react-icons/fa";
import { SiTailwindcss, SiExpress, SiPostgresql } from "react-icons/si";
import { TbBrandMongodb, TbBrandTypescript, TbBrandCss3 } from "react-icons/tb";
import { RiJavascriptLine } from "react-icons/ri";
import { BsBootstrap } from "react-icons/bs";

export default function Aboutpage() {
  return (
    <>
      <div className='text-white h-full px-3 sm:p-20 sm:max-w-screen-2xl mx-auto overflow-hidden'>
        <div className='grid lg:grid-cols-2 space-y-5'>

          <div 
            className='flex flex-col mx-auto space-y-10 mt-5 mb-10'
            data-aos={ window.innerWidth >= 1024 ? 'flip-left' : 'fade-up' } 
            data-aos-duration='1000'
            >

            <div className='flex justify-center mb-5 flex-col'>
              <img className="rounded-full h-96" src={require("../profile-photo.jpg")} alt='profile'/>
              <span className='text-center'>
                © Ryan Voong
              </span>
            </div>


            <div className='flex justify-center mb-10'>
              <a className='mx-2 flex flex-col items-center hover:text-red-400' href={require("../Ryan Voong - Software developer 2024 resume.pdf")} target='_blank' rel='noreferrer'>
                <AiOutlineFilePdf size="30" color='red'/> 
                <span>Resume</span>
              </a>
              <a className='mx-2 flex flex-col items-center hover:text-blue-400' href='https://www.linkedin.com/in/ryandvoong/' target='_blank' rel='noreferrer'>
                <AiOutlineLinkedin size="30" color='#71B7FB'/>
                <span>LinkedIn</span>
              </a>
              <a className='mx-2 flex flex-col items-center hover:text-orange-400' href='https://github.com/ryanpv' target='_blank' rel='noreferrer'>
                <VscGithub size="30" color='orange'/>
                <span>GitHub</span>
              </a>
            </div>
            
            
          </div>

          <div 
            className='max-w-screen-2xl'
            data-aos={ window.innerWidth >= 1024 ? 'flip-right' : 'fade-up' } 
            data-aos-duration='1000'
          >
            <h1 className='text-center text-5xl underline decoration-orange-400'>About Me</h1>
            <br></br>
        
            <p className='font- mt-4'>
              I am a full-stack software developer with background experience as a Registered Nurse. My passion lies in problem-solving and continuous learning. I seek to utilize
              my acquired skills of problem-solving and collaboration from high-pressure, dynamic environments to better understand and improve user experiences.

              <br></br>
              <br></br>

              <p className='text-center font-bold'>What I'm currently working on:</p>
              I am currently collaborating with nail industry professionals to develop a web-application that allows booking and management of appointments. Users or customers will
              have the ability to request, update, and cancel appointments through their
              own account on the site. You can view the MVP at <a className='hover:text-orange-500 hover:underline text-orange-400' href='https://www.polishbycin.com' target='_blank' rel='noreferrer'><i>https://polishbycin.com</i></a>. 
              If you would like to follow along with the journey, you can take a look at the code progress here:&nbsp;
              <a className='hover:text-orange-500 hover:underline text-orange-400' href='https://github.com/ryanpv/beauty-service-app' target='_blank' rel='noreferrer'><i>Github/ryanpv</i></a>.
              <br></br>
              <br></br>

              I'm always open to connect and have a chat so send me a message!
            </p>

            <hr className='border border-orange-400 my-5'></hr>
            
            <div className='mb-10'>
              <h3 className='text-xl font-bold text-center mb-4'>Tech stack:</h3>

              <div className='flex sm:flex-row flex-wrap gap-4 justify-center items-center'>
                <div className='grid justify-items-center font-semibold'>
                  <TbBrandTypescript size='50' color='#A2BCDD'/>
                  <label>Typescript</label>
                </div>

                <div className='grid justify-items-center font-semibold'>
                  <RiJavascriptLine size='50' color='#F7DF38'/>
                  <label>Javascript</label>
                </div>

                <div className='grid justify-items-center font-semibold'>
                  <FaNodeJs size='50' color='#87BF00'/>
                  <label>NodeJS</label>
                </div>

                <div className='grid justify-items-center font-semibold'>
                  <FaReact size='50' color='#5ED3F3'/>
                  <label>ReactJS</label>
                </div>

                <div className='grid justify-items-center font-semibold'>
                  <SiExpress size='50' />
                  <label>ExpressJS</label>
                </div>

                <div className='grid justify-items-center font-semibold'>
                  <SiPostgresql size='50' color='#31648C'/>
                  <label>PostgreSQL</label>
                </div>

                <div className='grid justify-items-center font-semibold'>
                  <TbBrandMongodb size='50' color='#10964D'/>
                  <label>MongoDB</label>
                </div>

                <div className='grid justify-items-center font-semibold'>
                  <AiOutlineHtml5 size='50' color='#E96228'/>
                  <label>HTML</label>
                </div>

                <div className='grid justify-items-center font-semibold'>
                  <SiTailwindcss size='50' color='#26BAC6'/>
                  <label>TailwindCSS</label>
                </div>

                <div className='grid justify-items-center font-semibold'>
                  <BsBootstrap size='50' color='#9A49E4'/>
                  <label>Bootstrap</label>
                </div>

                <div className='grid justify-items-center font-semibold'>
                  <TbBrandCss3 size='50' color='#254BDD'/>
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
