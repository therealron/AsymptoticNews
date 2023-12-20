import React, { useContext, useEffect } from 'react'
import { useState } from 'react'
import { HandThumbUpIcon } from '@heroicons/react/24/solid'
import { useParams } from 'react-router-dom'
import { BASE_URL } from '../../utils/constants'
import axios from 'axios'
import { AuthContext } from '../../context/AuthContext'
import { Link } from 'react-router-dom'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import 'react-tabs/style/react-tabs.css'
import { Submit } from './Submit'
import { Leaderboard } from './Leaderboard'
import { Feed } from './Feed'
import { Rules } from './Rules'

export const Discussion = ({ comp_id }) => {
  //   const [title, setTitle] = useState('')
  //   const [desc, setDesc] = useState('')
  //   const [likes, setLikes] = useState('')
  console.log(comp_id)
  const [discussion, setDiscussion] = useState([])

  //   const [competition, setCompetition] = useState({})
  //   const [rules, setRules] = useState([])
  //   const [task, setTask] = useState('')
  //   const [evaluation, setEvaluation] = useState('')
  const [runUseEffect, setRunUseEffect] = useState(false)
  //   const [submissions, setSubmissions] = useState({})
  useEffect(() => {
    axios
      .get(BASE_URL + `competition/${comp_id}/discussion_post`) // Use the actual endpoint URL
      .then((response) => {
        const fetchedData = response.data
        setDiscussion(fetchedData.discussion)
        console.log(fetchedData.discussion)
        // setComments(fetchedData.comments)
        // setDesc(fetchedData.desc)
        // setTitle(fetchedData.title)
        // setLikes(fetchedData.likes)
      })
      .catch((error) => {
        console.error(error)
      })
  }, [runUseEffect])
  // return (
  //   <div className="p-4">
  //     <div className="flex justify-end mb-4">
  //       <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
  //         Post Discussion
  //       </button>
  //     </div>
  //     <div className="overflow-auto h-96">
  //       {discussion?.map((disc) => (
  //         <div key={disc.id} className="bg-white p-4 rounded-lg shadow mb-4">
  //           <h3 className="text-lg font-bold mb-2">{disc.title}</h3>
  //           <p>{disc.content}</p>
  //         </div>
  //       ))}
  //       {/* {if (discussion.length ==0)} */}
  //     </div>
  //   </div>
  // )
  return (
    <div>
      Discussion forum will go live on 3rd January. Till then please start
      submitting solutions to the best of your understanding. Sorry for the
      inconvenience :)
    </div>
  )
}

export default Discussion
