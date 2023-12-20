import React, { useState } from 'react'
import { Link } from 'react-router-dom'

// export const CreateStartCompetition = () => {
export const CreateStartCompetition = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen">
        <h1 className="text-4xl font-semibold mt-40 -mb-60">
          How would you like to request a Competition?
        </h1>

        <div className="flex flex-row items-center justify-center min-h-screen">
          {/* <Link to="/createrequest">
        <div className=" w-64 h-64  bg-indigo-300 rounded-lg shadow-md p-20 mx-20 flex flex-col justify-content">
          <span className="text-white text-3xl pt-2">Request </span>
          <span className="text-white text-1xl  px-3">from the community</span>
        </div>
      </Link> */}

          <Link to="/createrequest">
            <div className="w-64 h-64 bg-indigo-300 rounded-lg shadow-md p-8 mx-20 flex flex-col justify-center items-center transition transform hover:scale-105">
              <span className="text-white text-3xl font-semibold">Request</span>
              <span className="text-white text-lg px-3 mt-2">
                the community
              </span>
            </div>
          </Link>

          <Link to="/createagent">
            <div className="w-64 h-64 bg-indigo-300 rounded-lg shadow-md p-8 mx-20 flex flex-col justify-center items-center transition transform hover:scale-105">
              <span className="text-white text-3xl font-semibold">
                Sponsor{' '}
              </span>

              <span className="text-white text-lg px-3 mt-2">
                a competition{' '}
              </span>
              <span className="text-white text-lg px-3">for your usecase </span>

              {/* <span className="text-white text-lg px-3 mt-2">
            from the community
          </span> */}
            </div>
          </Link>
        </div>
      </div>
    </>
  )
}

export default CreateStartCompetition
