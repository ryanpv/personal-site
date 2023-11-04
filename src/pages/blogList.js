import React from "react";

export default function BlogList() {

  return(
    <>
      <h1 className="text-5xl font-extrabold leading text-white underline text-center">Blog List</h1>
      <ul>
        <li className="text-5xl font-extrabold leading text-white underline text-center">
          <a href="/blogs/item1">
            ExpressJS Video Streaming Server with AWS
            </a>
        </li>
        <li className="text-5xl font-extrabold leading text-white underline text-center">Item 2</li>
        <li className="text-5xl font-extrabold leading text-white underline text-center">Item 3</li>
      </ul>
    </>
  )
}