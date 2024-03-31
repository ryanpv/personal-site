import React from 'react'
import { BsArrowRight } from 'react-icons/bs'

export default function PersonalProjects() {
  return (
    <div 
      className='flex h-full bg-indigo-200 flex-col' 
      style={ { backgroundColor: '#A2BCDD' } }
    >
      <main className='flex justify-center items-center pt-16 px-5 mb-auto'>
        <div className='max-w-4xl flex flex-col divide-y divide-gray-200 dark:divide-gray-700'>
          <div className='space-y-2 pt-6 pb-8 md:space-y-5'>
          <header className='rounded-full p-3 text-5xl font-extrabold leading text-white underline text-center decoration-orange-400'>
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
              <div className='sm:py-4 flex justify-center mt-4 sm:mt-0'>
                <div className='w-full flex flex-col md:flex-row'>
                  <div className='md:w-1/3 h-full overflow-hidden rounded-md'>
                    <img className='rounded object-cover object-center md:h-36 md:h-60' alt="PolishByCin" src={require("../PolishByCin-SS.png")} />
                  </div>
                  <div className='md:w-2/3 flex flex-col'>
                    <div className='pl-2'>
                      <h2 className='text-indigo-500 my-3 md:mb-3 md:mt-0 text-2xl font-bold leading-8 tracking-tight'>
                        PolishByCin (Beauty service booking app)
                      </h2>
                    </div>
                    <p className='pl-2 prose mb-3 max-w-none text-gray-700 font-semibold'>
                    This is a project I developed for a client I know personally. They requested the app for a business they are planning in the future. However, in the mean time, it can also be used to showcase their current works. Throughout the development life cycle, we discussed plans about designs and features to be implemented that we believe provides the best user experiences.
                    </p>
                    <a className='pl-2 text-base text-indigo-500 font-bold leading-6 text-primary-500 hover:text-primary-600 dark:hover:text-primary-400' href='https://www.polishbycin.com' target='_blank' rel='noreferrer'>
                      <div className='flex m'>
                        <BsArrowRight />
                        &nbsp; Visit the live site
                      </div>
                    </a>
                    <a className='pl-2 text-base text-indigo-500 font-bold leading-6 text-primary-500 hover:text-primary-600 dark:hover:text-primary-400' href='https://github.com/ryanpv/beauty-service-app' target='_blank' rel='noreferrer'>
                      <div className='flex m'>
                        <BsArrowRight />
                        &nbsp; See the GitHub
                      </div>
                    </a>
                  </div>
                </div>
              </div>
{/* ////////////////////////////////// WORLD ANIME APP ///////////////////////////////////// */}
              <div className='py-4 flex justify-center'>
                <div className='w-full flex flex-col md:flex-row'>
                  <div className='md:w-1/3 h-full overflow-hidden rounded-md'>
                    <img className='rounded object-cover object-center md:h-36 md:h-60' alt="WorldAnime" src={require("../WorldAnime-SS.png")} />
                  </div>
                  <div className='md:w-2/3 flex flex-col'>
                    <div className='p-y-6 pl-2'>
                      <h2 className='text-indigo-500 my-3 md:mb-3 md:mt-0 text-2xl font-bold leading-8 tracking-tight'>
                        WorldAnime (MyAnimeList app)
                      </h2>
                    </div>
                    <p className='pl-2 prose mb-3 max-w-none text-gray-700 font-semibold'>
                    As someone who enjoys anime and is always looking for a new show to watch, I wanted to create a project that had something to do with anime. I believe that the original MyAnimeList(MAL).net is a fantastic site to get all your anime information, but I wanted to simplify it a bit more. The idea of MAL-Simplified is to be focused solely on anime titles rather than including manga, anime news, etc. Users would be able to quicky search any anime available on the MAL database and view basic information such as scores, synopsis, and trailers.
                    </p>
                    <a className='pl-2 text-base text-indigo-500 font-bold leading-6 text-primary-500 hover:text-primary-600 dark:hover:text-primary-400' href='https://mal-simplified.web.app/' target='_blank' rel='noreferrer'>
                      <div className='flex m'>
                        <BsArrowRight />
                        &nbsp; Visit the live site
                      </div>
                    </a>
                    <a className='pl-2 text-base text-indigo-500 font-bold leading-6 text-primary-500 hover:text-primary-600 dark:hover:text-primary-400' href='https://github.com/ryanpv/mal-simp-api' target='_blank' rel='noreferrer'>
                      <div className='flex m'>
                        <BsArrowRight />
                        &nbsp; See the GitHub
                      </div>
                    </a>
                  </div>
                </div>
              </div>
{/* ////////////////////////////////// REDDIT BOOKMARK MANAGER ///////////////////////////////////// */}
              <div className='py-4 flex justify-center'>
                <div className='w-full flex flex-col md:flex-row'>
                  <div className='md:w-1/3 h-full overflow-hidden rounded-md'>
                    <img className='rounded object-cover object-center md:h-36 md:h-60' alt="reddit bookmark manager" src={require("../Reddit-bookmark-manager-screenshot.jpg")} />
                  </div>
                  <div className='md:w-2/3 flex flex-col'>
                    <div className='p-y-6 pl-2'>
                      <h2 className='text-indigo-500 my-3 md:mb-3 md:mt-0 text-2xl font-bold leading-8 tracking-tight'>
                        Reddit Bookmark Manager
                      </h2>
                    </div>
                    <p className='pl-2 prose mb-3 max-w-none text-gray-700 font-bold'>
                    Reddit Bookmark Manager is a web-app that allows users to organize their saved Reddit posts/comments/links in custom categories. Previously, only Reddit premium users had access to such a feature. This web-app allows users to do so without affecting their Reddit account. This web-app uses it's own database to store the saved data so if a user accidentally removes a save from their Reddit account, it would still exist in any category it is saved in.
                    </p>
                    <a className='pl-2 text-base text-indigo-500 font-bold leading-6 text-primary-500 hover:text-primary-600 dark:hover:text-primary-400' href='https://github.com/ryanpv/reddit-bookmark-manager-client' target='_blank' rel='noreferrer'>
                      <div className='flex m'>
                        <BsArrowRight />
                        &nbsp; See the GitHub
                      </div>
                    </a>
                  </div>
                </div>
              </div>
{/* ////////////////////////////////// NODEJS VIDEO STREAMING SERVER ///////////////////////////////////// */}
              <div className='py-4 flex justify-center'>
                <div className='w-full flex flex-col md:flex-row'>
                  {/* <div className='md:w-1/3 h-full overflow-hidden rounded-md'>
                    <img className='rounded object-cover object-center md:h-36 md:h-48' alt="WorldAnime" src={require("../nodejs-appointment-scheduler-appointments.jpg")} />
                  </div> */}
                  <div className='md:w-100 flex flex-col'>
                    <div className='p-y-6 pl-2'>
                      <h2 className='text-indigo-500 my-3 md:mb-3 md:mt-0 text-2xl font-bold leading-8 tracking-tight'>
                        NodeJS Video Streaming Server
                      </h2>
                    </div>
                    <p className='pl-2 prose mb-3 max-w-none text-gray-700 font-bold'>
                    This is a project I developed to serve as a video streaming server built with ExpressJS that also utilizes AWS services to optimize video streaming securely. It also includes functionality to convert media files, such as .MOV and .MP4, to HLS protocol and uploading directly to AWS S3. Other AWS services include CloudFront, API gateway, and Lambda. To learn more about how AWS was integrated, check out the blog post by clicking the link below.</p>
                    <a className='pl-2 text-base text-white font-medium leading-6 text-primary-500 hover:text-primary-600 dark:hover:text-primary-400' href='/#/blogs/expressjs-video-streaming-server-with-aws'>
                      <div className='flex m font-bold text-indigo-500'>
                        <BsArrowRight />
                        &nbsp; Check out the blog post
                      </div>
                    </a>
                    <a className='pl-2 text-base text-white font-medium leading-6 text-primary-500 hover:text-primary-600 dark:hover:text-primary-400' href='https://github.com/ryanpv/node-video-streamer' target='_blank' rel='noreferrer'>
                      <div className='flex font-bold text-indigo-500'>
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
