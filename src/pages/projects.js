import React from 'react'
import { BsArrowRight } from 'react-icons/bs'

export default function PersonalProjects() {
  return (
    <div className='flex h-full flex-col'>
      <main className='flex justify-center items-center p-16 mb-auto'>
        <div className='max-w-4xl flex flex-col divide-y divide-gray-200 dark:divide-gray-700'>
          <div className='space-y-2 pt-6 pb-8 md:space-y-5'>
          <header className='text-5xl font-extrabold leading text-white underline text-center'>
              My Personal Projects
            </header>
          <p className='text-white text-center'>Come have a look at my personal projects and let me know if you have any comments/suggestions!</p>
          </div>
          <div className='container'>
            <div className='m-4 flex flex-col divide-y divide-gray-700'>
{/* ////////////////////////////////// WORLD ANIME APP ///////////////////////////////////// */}
              <div className='py-4 flex justify-center'>
                <div className='w-full flex flex-col lg:flex-row'>
                  <div className='lg:w-1/3 h-full overflow-hidden rounded-md'>
                    <img className='rounded object-cover object-center md:h-36 lg:h-60' alt="WorldAnime" src={require("../WorldAnime-Screenshot.jpg")} />
                  </div>
                  <div className='md:w-2/3 flex flex-col'>
                    <div className='p-y-6 pl-2'>
                      <h2 className='text-white mb-3 text-2xl font-bold leading-8 tracking-tight'>
                        WorldAnime (MyAnimeList app)
                      </h2>
                    </div>
                    <p className='pl-2 prose mb-3 max-w-none text-gray-500 dark:text-gray-400'>
                    As someone who enjoys anime and is always looking for a new show to watch, I wanted to create a project that had something to do with anime. I believe that the original MyAnimeList(MAL).net is a fantastic site to get all your anime information, but I wanted to simplify it a bit more. The idea of MAL-Simplified is to be focused solely on anime titles rather than including manga, anime news, etc. Users would be able to quicky search any anime available on the MAL database and view basic information such as scores, synopsis, and trailers.
                    </p>
                    <a className='pl-2 text-base text-white font-medium leading-6 text-primary-500 hover:text-primary-600 dark:hover:text-primary-400' href='https://mal-simplified.web.app/' target='_blank' rel='noreferrer'>
                      <div className='flex m'>
                        <BsArrowRight />
                        &nbsp; Visit the site
                      </div>
                    </a>
                    <a className='pl-2 text-base text-white font-medium leading-6 text-primary-500 hover:text-primary-600 dark:hover:text-primary-400' href='https://github.com/ryanpv/mal-simp-api' target='_blank' rel='noreferrer'>
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
                <div className='w-full flex flex-col lg:flex-row'>
                  <div className='lg:w-1/3 h-full overflow-hidden rounded-md'>
                    <img className='rounded object-cover object-center md:h-36 lg:h-48' alt="WorldAnime" src={require("../Reddit-bookmark-manager-screenshot.jpg")} />
                  </div>
                  <div className='md:w-2/3 flex flex-col'>
                    <div className='p-y-6 pl-2'>
                      <h2 className='text-white mb-3 text-2xl font-bold leading-8 tracking-tight'>
                        Reddit Bookmark Manager
                      </h2>
                    </div>
                    <p className='pl-2 prose mb-3 max-w-none text-gray-500 dark:text-gray-400'>
                    Reddit Bookmark Manager is a web-app that allows users to organize their saved Reddit posts/comments/links in custom categories. Previously, only Reddit premium users had access to such a feature. This web-app allows users to do so without affecting their Reddit account. This web-app uses it's own database to store the saved data so if a user accidentally removes a save from their Reddit account, it would still exist in any category it is saved in.
                    </p>
                    <a className='pl-2 text-base text-white font-medium leading-6 text-primary-500 hover:text-primary-600 dark:hover:text-primary-400' href='https://github.com/ryanpv/reddit-bookmark-manager-client' target='_blank' rel='noreferrer'>
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
                <div className='w-full flex flex-col lg:flex-row'>
                  {/* <div className='lg:w-1/3 h-full overflow-hidden rounded-md'>
                    <img className='rounded object-cover object-center md:h-36 lg:h-48' alt="WorldAnime" src={require("../nodejs-appointment-scheduler-appointments.jpg")} />
                  </div> */}
                  <div className='md:w-100 flex flex-col'>
                    <div className='p-y-6 pl-2'>
                      <h2 className='text-white mb-3 text-2xl font-bold leading-8 tracking-tight'>
                        NodeJS Video Streaming Server
                      </h2>
                    </div>
                    <p className='pl-2 prose mb-3 max-w-none text-gray-500 dark:text-gray-400'>
                    This is a project I developed to serve as a video streaming server built with ExpressJS that also utilizes AWS services to optimize video streaming securely. It also includes functionality to convert media files, such as .MOV and .MP4, to HLS protocol and uploading directly to AWS S3. Other AWS services include CloudFront, API gateway, and Lambda. To learn more about how AWS was integrated, check out the blog post by clicking the link below.</p>
                    <a className='pl-2 text-base text-white font-medium leading-6 text-primary-500 hover:text-primary-600 dark:hover:text-primary-400' href='#blogs/video-streaming-server' target='_blank' rel='noreferrer'>
                      <div className='flex m'>
                        <BsArrowRight />
                        &nbsp; Check out the blog post
                      </div>
                    </a>
                    <a className='pl-2 text-base text-white font-medium leading-6 text-primary-500 hover:text-primary-600 dark:hover:text-primary-400' href='https://github.com/ryanpv/node-video-streamer' target='_blank' rel='noreferrer'>
                      <div className='flex m'>
                        <BsArrowRight />
                        &nbsp; See the GitHub
                      </div>
                    </a>
                  </div>
                </div>
              </div>
{/* ////////////////////////////////// NODEJS APPOINTMENT SCHEDULER ///////////////////////////////////// */}
              <div className='py-4 flex justify-center'>
                <div className='w-full flex flex-col lg:flex-row'>
                  {/* <div className='lg:w-1/3 h-full overflow-hidden rounded-md'>
                    <img className='rounded object-cover object-center md:h-36 lg:h-48' alt="WorldAnime" src={require("../nodejs-appointment-scheduler-appointments.jpg")} />
                  </div> */}
                  <div className='md:w-100 flex flex-col'>
                    <div className='p-y-6 pl-2'>
                      <h2 className='text-white mb-3 text-2xl font-bold leading-8 tracking-tight'>
                        NodeJS Appointment Scheduler
                      </h2>
                    </div>
                    <p className='pl-2 prose mb-3 max-w-none text-gray-500 dark:text-gray-400'>
                    This app was developed to serve as backend for services that use appointment scheduling. It is built with ExpressJS and uses EJS view template to visualize how the app works. Users can simply book appointments without an account, but if they have an account they can keep track of all appointments they have booked with the specific service. With an account they would also be able to change/cancel an appointment through the app instead of calling the service provider. With nodemailer implementation, the app sends an email notification for any bookings/cancellations/changes. The app also has features for "admins" such as looking up any booked appointment and exporting daily appointments/schedule to an excel sheet if they wish to further organize the data.                    </p>
                    <a className='pl-2 text-base text-white font-medium leading-6 text-primary-500 hover:text-primary-600 dark:hover:text-primary-400' href='https://github.com/ryanpv/nodejs-appointment-scheduler' target='_blank' rel='noreferrer'>
                      <div className='flex m'>
                        <BsArrowRight />
                        &nbsp; See the GitHub
                      </div>
                    </a>
                  </div>
                </div>
              </div>
{/* ////////////////////////////////// NODEJS FILE ENCRYPTOR-DECRYPTOR ///////////////////////////////////// */}
              <div className='py-4 flex justify-center'>
                <div className='w-full flex flex-col lg:flex-row'>
                  <div className='md:w-100 flex flex-col'>
                    <div className='p-y-6 pl-2'>
                      <h2 className='text-white mb-3 text-2xl font-bold leading-8 tracking-tight'>
                        NodeJS File Encryptor-Decryptor
                      </h2>
                    </div>
                    <p className='pl-2 prose mb-3 max-w-none text-gray-500 dark:text-gray-400'>
                    This app was developed to serve as backend for services that use appointment scheduling. It is built with ExpressJS and uses EJS view template to visualize how the app works. Users can simply book appointments without an account, but if they have an account they can keep track of all appointments they have booked with the specific service. With an account they would also be able to change/cancel an appointment through the app instead of calling the service provider. With nodemailer implementation, the app sends an email notification for any bookings/cancellations/changes. The app also has features for "admins" such as looking up any booked appointment and exporting daily appointments/schedule to an excel sheet if they wish to further organize the data.                    </p>
                    <a className='pl-2 text-base text-white font-medium leading-6 text-primary-500 hover:text-primary-600 dark:hover:text-primary-400' href='https://github.com/ryanpv/node_file_encrypt-decrypt' target='_blank' rel='noreferrer'>
                      <div className='flex m'>
                        <BsArrowRight />
                        &nbsp; See the GitHub
                      </div>
                    </a>
                  </div>
                </div>
              </div>
{/* ////////////////////////////////// PET FINDER APP ///////////////////////////////////// */}
              <div className='py-4 flex justify-center'>
                <div className='w-full flex flex-col lg:flex-row'>
                  <div className='md:w-100 flex flex-col'>
                    <div className='p-y-6 pl-2'>
                      <h2 className='text-white mb-3 text-2xl font-bold leading-8 tracking-tight'>
                        Pet Finder App
                      </h2>
                    </div>
                    <p className='pl-2 prose mb-3 max-w-none text-gray-500 dark:text-gray-400'>
                      Backend app that utilizes the PetFinder API for data on adoptable cats/dogs. This app is displayed with the EJS view template. I built this app because I wanted to continue to solidify my backend skills and since I love dogs and cats I chose to use the PetFinder API. Users are able to query for either adoptable dogs/cats data, filter the results, as well as search for the pet by name. The app also allows for account creation to store/save pet postings. 
                    </p>
                    <a className='pl-2 text-base text-white font-medium leading-6 text-primary-500 hover:text-primary-600 dark:hover:text-primary-400' href='https://github.com/ryanpv/pet-finder-api' target='_blank' rel='noreferrer'>
                      <div className='flex m'>
                        <BsArrowRight />
                        &nbsp; See the GitHub
                      </div>
                    </a>
                  </div>
                </div>
              </div>
{/* ////////////////////////////////// COVID TRACKER APP ///////////////////////////////////// */}
              <div className='py-4 flex justify-center'>
                <div className='w-full flex flex-col lg:flex-row'>
                  <div className='md:w-100 flex flex-col'>
                    <div className='p-y-6 pl-2'>
                      <h2 className='text-white mb-3 text-2xl font-bold leading-8 tracking-tight'>
                        COVID-19 Tracker App
                      </h2>
                    </div>
                    <p className='pl-2 prose mb-3 max-w-none text-gray-500 dark:text-gray-400'>
                      During the COVID-19 pandemic, I worked in public health as a registered nurse to support efforts in reducing the spread of the virus through infection management in schools, hospitals, nursing homes, individual/family cases, as well as vaccination programs. I figured it would be interesting to have personally developed a COVID-19 tracking app to see trends all over the world (countries, states and cities). This app was built using RAPID-API, which had access to official data from the John Hopkins University.
                    </p>
                    <a className='pl-2 text-base text-white font-medium leading-6 text-primary-500 hover:text-primary-600 dark:hover:text-primary-400' href='https://github.com/ryanpv/covid-tracker-api' target='_blank' rel='noreferrer'>
                      <div className='flex m'>
                        <BsArrowRight />
                        &nbsp; See the GitHub
                      </div>
                    </a>
                  </div>
                </div>
              </div>
{/* ////////////////////////////////// NODEJS EXPENSE TRACKER ///////////////////////////////////// */}
              <div className='py-4 flex justify-center'>
                <div className='w-full flex flex-col lg:flex-row'>
                  <div className='md:w-100 flex flex-col'>
                    <div className='p-y-6 pl-2'>
                      <h2 className='text-white mb-3 text-2xl font-bold leading-8 tracking-tight'>
                        NodeJS Expense Tracker
                      </h2>
                    </div>
                    <p className='pl-2 prose mb-3 max-w-none text-gray-500 dark:text-gray-400'>
                    This expense tracker app was developed track expenses to reduce unnecessary spending, which helped me early on when I used it. It is built with the MERN stack and optimized for scability through data caching and pagination.
                    </p>
                    <a className='pl-2 text-base text-white font-medium leading-6 text-primary-500 hover:text-primary-600 dark:hover:text-primary-400' href='https://github.com/ryanpv/nodejs-expense-tracker' target='_blank' rel='noreferrer'>
                      <div className='flex m'>
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
