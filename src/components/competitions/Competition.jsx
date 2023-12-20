import React, { useContext, useEffect } from 'react'
import { useState, useRef } from 'react'
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
import { Discussion } from './Discussion'

export const Competition = ({ tab_index = 0 }) => {
  // const Competition = ({ title, description, deadline }) => {
  const { comp_id } = useParams()
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [deadline, setDeadline] = useState('')
  const [startDate, setStartDate] = useState('')
  const [competition, setCompetition] = useState({})
  const [rules, setRules] = useState([])
  const [task, setTask] = useState('')
  const [evaluation, setEvaluation] = useState('')
  const [runUseEffect, setRunUseEffect] = useState(false)
  const [submissions, setSubmissions] = useState({})
  const [tabIndex, setTabIndex] = useState(tab_index)
  const feedRef = useRef(null) // Ref for the feed section

  const handleSubmissionSuccess = () => {
    setTabIndex(0)
    console.log('feedRef.current = ' + feedRef.current)
    setTimeout(() => {
      if (feedRef.current) {
        feedRef.current.scrollIntoView({ behavior: 'smooth' })
      }
    }, 0)
  }

  useEffect(() => {
    // Make an Axios GET request to fetch and sort the posts
    // console.log(BASE_URL + `posts/get/${post_id}`)

    axios
      .get(BASE_URL + `competition/${comp_id}/competition`) // Use the actual endpoint URL
      .then((response) => {
        const fetchedData = response.data
        setCompetition(fetchedData)
        setTitle(fetchedData.title)
        setDescription(fetchedData.desc)
        setDeadline(fetchedData.competition_end_date)
        setTask(fetchedData.task)
        setStartDate(fetchedData.competition_start_date)
        setRules(fetchedData.rules)
        setEvaluation(fetchedData.evaluation)
        setSubmissions(fetchedData.submissions)
      })
      .catch((error) => {
        console.error(error)
      })
  }, [runUseEffect])

  return (
    <>
      <div className="max-w-5xl mx-auto p-4">
        <h1 className="text-2xl mx-2 font-bold mb-4">{title}</h1>

        <div>
          <p className="mx-2 text-m">Description: {description}</p>
        </div>

        <div className="bg-gray-100 p-4 rounded-lg">
          <h2 className="text-l font-semibold ">Competition Task:</h2>
          <div>
            <h3 className="bg-gray-50 text-xs mb-2">{task}</h3>
          </div>
          <h2 className="text-l font-semibold ">Evaluation:</h2>
          <div>
            <h3 className="bg-gray-50 text-xs mb-2">{evaluation}</h3>
          </div>
          <p>
            <strong>Start Date:</strong> {startDate} - But we have started
            accepting solutions already. Submit yours today! :)
          </p>
          <p>
            <strong>Deadline:</strong> {deadline}
          </p>
          <p>
            <strong>Cash Prize:</strong> TBD by start date
          </p>
          {/* Additional details here */}
        </div>
        <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
          <TabList className="flex">
            <Tab className="flex-grow text-center  py-2 border-b-2 hover:border-gray-400 focus:border-blue-500 font-bold">
              Feed
            </Tab>
            <Tab className="flex-grow text-center  py-2 border-b-2 hover:border-gray-400 focus:border-blue-500 font-bold">
              Rules
            </Tab>
            <Tab className="flex-grow text-center  py-2 border-b-2 hover:border-gray-400 focus:border-blue-500 font-bold">
              Discussion
            </Tab>
            <Tab className="flex-grow text-center  py-2 border-b-2 hover:border-gray-400 focus:border-blue-500 font-bold">
              Leaderboard
            </Tab>

            <Tab className="flex-grow text-white text-center py-2 border-b-2 border-transparent bg-indigo-500 hover:bg-indigo-600 focus:bg-indigo-600 font-bold">
              Submit
            </Tab>
          </TabList>

          <TabPanel ref={feedRef}>
            <Feed comp_id={comp_id} />
            {/* Add leaderboard content here */}
          </TabPanel>

          <TabPanel>
            <Rules rules={rules} />
            {/* Add feed content here */}
          </TabPanel>

          <TabPanel>
            <Discussion comp_id={comp_id} />
            {/* Add discussion content here */}
          </TabPanel>

          <TabPanel>
            <Leaderboard />
            {/* Add submission form/content here */}
          </TabPanel>
          <TabPanel>
            <Submit
              comp_id={comp_id}
              onSubmissionSuccess={handleSubmissionSuccess}
            />
            {/* Add submission form/content here */}
          </TabPanel>
        </Tabs>
        {/* Additional sections/components such as leaderboard, discussions, etc. */}
      </div>
    </>
  )
}

export default Competition
