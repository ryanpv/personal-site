import React from "react";

export default function BlogList() {

  return(
    <>
      <div className='flex h-full flex-col'>
        <main className='flex justify-center items-center p-16 mb-auto'>
          <div className='max-w-4xl flex flex-col divide-y divide-gray-200 dark:divide-gray-700'>
            <div className='space-y-2 pt-6 pb-8 md:space-y-5'>
              <header className='text-5xl font-extrabold leading text-white underline decoration-orange-400 text-center'>
                My Personal Blogs
              </header>
              <p className='text-white text-center font-semibold'>Check out my blogs and feel free to ask questions/send some feedback!</p>
            </div>

            <div className='container'>
              <li className="text-2xl font-extrabold leading text-white text-center">
                <a href="/#/blogs/expressjs-video-streaming-server-with-aws">
                  ExpressJS Video Streaming Server with AWS
                </a>
              </li>
            </div>

          </div>
        </main>
      </div>
    </>
  )
}