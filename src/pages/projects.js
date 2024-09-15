import React from 'react'
import { BsArrowRight } from 'react-icons/bs'

export default function PersonalProjects() {
  return (
    <div 
      className='flex h-full bg-indigo-200 flex-col overflow-hidden' 
      style={ { backgroundColor: '#A2BCDD' } }
    >
      <main className='flex justify-center items-center pt-16 px-5 mb-auto'>
        <div className='max-w-4xl flex flex-col divide-y divide-gray-200 dark:divide-gray-700'>
          <div className='space-y-2 pt-6 pb-8 md:space-y-5'>
          <header className='rounded-full p-3 text-5xl leading text-white underline text-center decoration-orange-400'>
              My Personal Projects
            </header>
          <p className='text-gray-700 text-center font-semibold text-xl'>Come have a look at some of my work!</p>
          <p className='text-gray-700 text-center font-semibold text-xl'>If you'd like to see more, check out my github:
          &nbsp;
            <a className='underline text-indigo-500 hover:text-indigo-700' href='https://github.com/ryanpv' target='_blank' rel='noreferrer'>https://github.com/ryanpv</a> 
          </p>
          </div>
          <div className=''>
            <div className='sm:m-4 flex flex-col divide-y divide-gray-700'>
{/* ////////////////////////////////// POLISHBYCIN BEAUTY SERVICE APP ///////////////////////////////////// */}
              <div 
                className='sm:py-4 flex justify-center mt-4 sm:mt-0'
                data-aos='fade-right'
                data-aos-duration='1500'
                >
                <div className='w-full flex flex-col md:flex-row md:space-x-7'>
                  <div className='md:w-1/3 h-full overflow-hidden rounded-md'>
                    <img className='rounded object-cover object-center md:h-36 md:h-60' alt="PolishByCin" src={require("../PolishByCin-SS.png")} />
                  </div>
                  <div className='md:w-2/3 flex flex-col mt-5 md:mt-0'>
                    <div className='pl-2'>
                      <a 
                        className='text-indigo-500 md:mb-3 text-2xl font-bold leading-8 tracking-tight hover:text-indigo-600' 
                        href='https://www.polishbycin.com' 
                        target='_blank' 
                        rel='noreferrer'>
                        PolishByCin (Beauty service booking app)
                      </a>
                    </div>
                    <p className='pl-2 prose mb-3 max-w-none text-gray-700 font-semibold'>
                    PolishByCin is a web-app I developed for a client to help them manage their future nail service business. Users can discover nail services offered, book appointments, and manage existing ones.
                    </p>
                    <a className='pl-2 text-base text-indigo-500 hover:font-bold font-semibold leading-6 text-primary-500 hover:text-primary-600 dark:hover:text-primary-400' href='https://www.polishbycin.com' target='_blank' rel='noreferrer'>
                      <div className='flex m'>
                        <BsArrowRight />
                        &nbsp; Visit the live site
                      </div>
                    </a>
                    <a className='pl-2 text-base text-indigo-500 hover:font-bold font-semibold leading-6 text-primary-500 hover:text-primary-600 dark:hover:text-primary-400' href='https://github.com/ryanpv/beauty-service-app' target='_blank' rel='noreferrer'>
                      <div className='flex m'>
                        <BsArrowRight />
                        &nbsp; See the GitHub
                      </div>
                    </a>
                  </div>
                </div>
              </div>
{/* ////////////////////////////////// AI Voice Chatbot ///////////////////////////////////// */}
              <div 
                className='py-4 flex justify-center'
                data-aos='fade-left'
                data-aos-duration='1500'
              >
                <div className='w-full flex flex-col md:flex-row md:space-x-7 mt-4'>
                  <div className='md:w-1/3 h-full overflow-hidden rounded-md'>
                    <img className='rounded object-cover object-center md:h-36 md:h-60 mx-auto' alt="AI Voice Chatbot" src={require("../Chatbot_screenshot.png")} />
                  </div>
                  <div className='md:w-2/3 flex flex-col mt-5 md:mt-0'>
                    <div className='p-y-6 pl-2'>
                      <a 
                        className='text-indigo-500 md:mb-3 text-2xl font-bold leading-8 tracking-tight hover:text-indigo-600' 
                        href='https://github.com/ryanpv/ai-chatbot/blob/main/README.md' target='_blank' rel='noreferrer'
                        >
                        AI Voice Chatbot
                      </a>
                    </div>
                    <p className='pl-2 prose mb-3 max-w-none text-gray-700 font-semibold'>
                    This project is a chatbot that allows users to interact with it using their voice recordings and receive an audio response. The server handles the interaction by leveraging OpenAI's Whisper-1 model and Chat Completions API. The voice is generated using Elevenlabs API, which has many other options for voices.                    </p>
                    <a className='pl-2 text-base text-indigo-500 hover:font-bold font-semibold leading-6 text-primary-500 hover:text-primary-600 dark:hover:text-primary-400' href='https://github.com/ryanpv/ai-chatbot/blob/main/README.md' target='_blank' rel='noreferrer'>
                      <div className='flex m'>
                        <BsArrowRight />
                        &nbsp; See the GitHub
                      </div>
                    </a>
                  </div>
                </div>
              </div>
{/* ////////////////////////////////// WORLD ANIME APP ///////////////////////////////////// */}
              <div 
                className='py-4 flex justify-center'
                data-aos='fade-right'
                data-aos-duration='1500'
              >
                <div className='w-full flex flex-col md:flex-row md:space-x-7 mt-4'>
                  <div className='md:w-1/3 h-full overflow-hidden rounded-md'>
                    <img className='rounded object-cover object-center md:h-36 md:h-60' alt="WorldAnime" src={require("../WorldAnime-SS.png")} />
                  </div>
                  <div className='md:w-2/3 flex flex-col mt-5 md:mt-0'>
                    <div className='p-y-6 pl-2'>
                      <a 
                        className='text-indigo-500 md:mb-3 text-2xl font-bold leading-8 tracking-tight hover:text-indigo-600' 
                        href='https://mal-simplified.web.app/' target='_blank' rel='noreferrer'
                        >
                        WorldAnime (MyAnimeList app)
                      </a>
                    </div>
                    <p className='pl-2 prose mb-3 max-w-none text-gray-700 font-semibold'>
                      WorldAnime is a web-app that allows users to discover anime titles and trailers. This app leverages the MyAnimeList API for all its anime data, such as scores, synopsis, and number of episodes. Users can also save the titles for later or to 
                      keep track of what they are watching.
                    </p>
                    <a className='pl-2 text-base text-indigo-500 hover:font-bold font-semibold leading-6 text-primary-500 hover:text-primary-600 dark:hover:text-primary-400' href='https://mal-simplified.web.app/' target='_blank' rel='noreferrer'>
                      <div className='flex m'>
                        <BsArrowRight />
                        &nbsp; Visit the live site
                      </div>
                    </a>
                    <a className='pl-2 text-base text-indigo-500 hover:font-bold font-semibold leading-6 text-primary-500 hover:text-primary-600 dark:hover:text-primary-400' href='https://github.com/ryanpv/mal-simp-api' target='_blank' rel='noreferrer'>
                      <div className='flex m'>
                        <BsArrowRight />
                        &nbsp; See the GitHub
                      </div>
                    </a>
                  </div>
                </div>
              </div>
{/* ////////////////////////////////// REDDIT BOOKMARK MANAGER ///////////////////////////////////// */}
              <div 
                className='py-4 flex justify-center'
                data-aos='fade-left'
                data-aos-duration='1500'
              >
                <div className='w-full flex flex-col md:flex-row md:space-x-7 mt-4'>
                  <div className='md:w-1/3 h-full overflow-hidden rounded-md'>
                    <img className='rounded object-cover object-center md:h-36 md:h-60' alt="reddit bookmark manager" src={require("../Reddit-bookmark-manager-screenshot.jpg")} />
                  </div>
                  <div className='md:w-2/3 flex flex-col mt-5 md:mt-0'>
                    <div className='p-y-6 pl-2'>
                      <a 
                        className='text-indigo-500 md:mb-3 text-2xl font-bold leading-8 tracking-tight hover:text-indigo-600' 
                        href='https://github.com/ryanpv/reddit-bookmark-manager-client' target='_blank' rel='noreferrer'
                        >
                        Reddit Bookmark Manager
                      </a>
                    </div>
                    <p className='pl-2 prose mb-3 max-w-none text-gray-700 font-semibold'>
                    Reddit Bookmark Manager is a web-app that allows users to organize their saved Reddit posts/comments/links in custom categories. Data stored in their official Reddit account will not be affected.
                    </p>
                    <a className='pl-2 text-base text-indigo-500 hover:font-bold font-semibold leading-6 text-primary-500 hover:text-primary-600 dark:hover:text-primary-400' href='https://github.com/ryanpv/reddit-bookmark-manager-client' target='_blank' rel='noreferrer'>
                      <div className='flex m'>
                        <BsArrowRight />
                        &nbsp; See the GitHub
                      </div>
                    </a>
                  </div>
                </div>
              </div>
{/* ////////////////////////////////// NODEJS VIDEO STREAMING SERVER ///////////////////////////////////// */}
              <div 
                className='py-4 flex justify-center'
                data-aos='fade-right'
                data-aos-duration='1500'
              >
                <div className='w-full flex flex-col md:flex-row md:space-x-7'>
                  {/* <div className='md:w-1/3 h-full overflow-hidden rounded-md'>
                    <img className='rounded object-cover object-center md:h-36 md:h-48' alt="WorldAnime" src={require("../nodejs-appointment-scheduler-appointments.jpg")} />
                  </div> */}
                  <div className='md:w-100 flex flex-col'>
                    <div className='p-y-6 pl-2'>
                      <a 
                        className='text-indigo-500 my-3 md:mb-3 md:mt-0 text-2xl font-bold leading-8 tracking-tight hover:text-indigo-600' 
                        href='/#/blogs/expressjs-video-streaming-server-with-aws'
                        target='_blank' rel='noreferrer'
                        >
                        NodeJS Video Streaming Server
                      </a>
                    </div>
                    <p className='pl-2 prose mb-3 max-w-none text-gray-700 font-semibold'>
                    This is a project I developed to serve as a video streaming server built with ExpressJS that also utilizes AWS services to optimize video streaming securely. It also includes functionality to convert media files, such as .MOV and .MP4, 
                    to HLS protocol and uploading directly to AWS S3. Other AWS services include CloudFront, API gateway, and Lambda. To learn more about how AWS was integrated, check out the blog post by clicking the link below.</p>
                    <a className='pl-2 text-base text-white font-medium leading-6 text-primary-500 hover:text-primary-600 dark:hover:text-primary-400' href='/#/blogs/expressjs-video-streaming-server-with-aws'>
                      <div className='flex hover:font-bold font-semibold text-indigo-500'>
                        <BsArrowRight />
                        &nbsp; Check out the blog post
                      </div>
                    </a>
                    <a className='pl-2 text-base text-white font-medium leading-6 text-primary-500 hover:text-primary-600 dark:hover:text-primary-400' href='https://github.com/ryanpv/node-video-streamer' target='_blank' rel='noreferrer'>
                      <div className='flex hover:font-bold font-semibold text-indigo-500'>
                        <BsArrowRight />
                        &nbsp; See the GitHub
                      </div>
                    </a>
                  </div>
                </div>
              </div>
              
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
