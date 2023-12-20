import React, { useContext, useEffect } from 'react'
import { useState } from 'react'
import { FeedPost } from './FeedPost'
import { HandThumbUpIcon } from '@heroicons/react/24/solid'
import { useParams } from 'react-router-dom'
import { BASE_URL } from '../../utils/constants'
import axios from 'axios'
import { AuthContext } from '../../context/AuthContext'
import { Link } from 'react-router-dom'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import 'react-tabs/style/react-tabs.css'

export const Feed = ({ comp_id }) => {
  //   console.log(submissions.length)
  //   console.log('typeof submissions = ', typeof submissions)
  const { user } = useContext(AuthContext)
  const [submissions, setSubmissions] = useState([])
  const [likedArray, setLikedArray] = useState([])
  // const [run, setLikedArray] = useState([])
  useEffect(() => {
    axios
      .get(BASE_URL + `competition/${comp_id}/allsubmissions`) // Use the actual endpoint URL
      .then((response) => {
        const fetchedData = response.data

        // console.log(fetchedData)
        // console.log('likes = ', fetchedData[0].likes)
        // console.log(user._id)
        const sortedSubmissions = fetchedData.sort((a, b) => {
          // Assuming 'createdAt' is a string in ISO format
          return new Date(b.createdAt) - new Date(a.createdAt)
        })
        setSubmissions(sortedSubmissions)
        console.log(fetchedData[0].likes.includes(user?._id))
      })
      .catch((error) => {
        console.error(error)
      })
  }, [likedArray])

  return (
    <div>
      <div className="mx-auto flex justify-center items-center h-[100px]">
        {' '}
        {/* Adjust height as needed */}
        <h1 className="text-xl font-bold text-red-500">
          See other people's submissions ↓
        </h1>
      </div>

      {submissions.length > 0 ? (
        <>
          {submissions.map((sub, index) => (
            <FeedPost sub={sub} />
          ))}
        </>
      ) : (
        <></>
      )}
    </div>
  )
}
export default Feed
