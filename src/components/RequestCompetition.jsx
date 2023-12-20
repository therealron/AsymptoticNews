import { React, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { BASE_URL } from '../utils/constants'
import { AuthContext } from '../context/AuthContext'
import { useContext } from 'react'

export default function RequestAgent() {
  const [requestText, setRequestText] = useState('')
  const [titleText, setTitleText] = useState('')
  const [examplePrompt, setExamplePrompt] = useState('')
  const [ambiguitiesField, setAmbiguitiesField] = useState('')
  const [performanceField, setPerformanceField] = useState('')
  const [reasonField, setReasonField] = useState('')
  const [response, setResponse] = useState('')

  const [titleError, setTitleError] = useState('')
  const [bodyError, setBodyError] = useState('')
  const [showWarning, setShowWarning] = useState(false)
  const { user } = useContext(AuthContext)

  const handleResponseChange = (event) => {
    setResponse(event.target.value)
  }

  const navigate = useNavigate()

  const handleRequestSubmit = (e) => {
    e.preventDefault()
    // You can handle the submission of the request here, e.g., send it to a server or store it in state.
    const postData = {
      title: titleText,
      desc: requestText,
      examplePrompt: examplePrompt,
      ambiguities: ambiguitiesField,
      performance: performanceField,
      reason: reasonField,
      is_useful_to_poster: response,

      //   username: 'ronjo',
      //   userId: '654ab114a3ae8d94a20870c4',
      username: user.username,
      userId: user._id,
    }
    console.log(BASE_URL + 'posts')
    console.warn(process.env.API_URL + '/posts')
    axios
      .post(BASE_URL + 'posts', postData)
      .then((res) => {
        console.log(res)
        setRequestText('')
        navigate('/forum')
      })
      .catch((err) => {
        console.log(err)
      })
    // const res = await axios.post(BASE_URL + 'posts', postData)
    console.log('Request submitted:', requestText)

    // Clear the input field after submission.
    // setRequestText('')
    // navigate('/forum')
  }
  const handleRequestCancel = (e) => {
    e.preventDefault()
    // You can handle the submission of the request here, e.g., send it to a server or store it in state.
    console.log('Request submitted:', requestText)
    // Clear the input field after submission.
    setRequestText('')
    setShowWarning(true)
    console.warn('Request Cancelled!')
    setTimeout(() => {
      navigate('/')
    }, 2000) // 2 seconds (2000 milliseconds)
  }

  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <h2 className="text-2xl font-semibold text-center text-indigo-700">
          What would you like to see agents do?
        </h2>
        <h3 className="text-1xl font-semibold text-center text-indigo-700 ">
          Help us decide the next competition
        </h3>
        <h3 className="text-1xl font-semibold text-center text-indigo-700  ">
          Expected Time ~5 mins
        </h3>
        <p className="text-gray-600 text-center mb-4">
          Please be respectful and as detailed as possible. The community will
          upvote the suggestions they like.
        </p>

        <div className="bg-white  rounded-lg shadow-md w-3/4 p-10 py-10">
          <span>Title (Required)</span>
          <textarea
            className="w-full text-2xl font-semibold  border-gray-300"
            placeholder="Type a one line summary or title for the competition"
            onChange={(e) => setTitleText(e.target.value)}
          ></textarea>
          <form onSubmit={handleRequestSubmit}>
            <span>
              Description of what you want the agent to do? (Required)
            </span>
            <textarea
              className="w-full p-2 border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500"
              value={requestText}
              onChange={(e) => setRequestText(e.target.value)}
              // placeholder="What do you want the community to build for you?"
              placeholder={
                'eg. Create an agent that can search for jobs for me and apply to them on my behalf'
              }
              rows="4"
              required
            ></textarea>
            <span>Provide an example input prompt for this (Required)</span>
            <textarea
              className="w-full p-2 border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500"
              value={examplePrompt}
              onChange={(e) => setExamplePrompt(e.target.value)}
              // placeholder="What do you want the community to build for you?"
              placeholder={
                'eg. "Please find me New-Grad Software Engineering roles in San Francisco. Avoid any front-end engineering roles. Rank all your findings."'
              }
              rows="4"
              required
            ></textarea>
            <span>
              What do you think is hard about this problem? Please list some
              ambiguities that the agent is likely to face. (Optional)
            </span>
            <textarea
              className="w-full p-2 border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500"
              value={ambiguitiesField}
              onChange={(e) => setAmbiguitiesField(e.target.value)}
              // placeholder="What do you want the community to build for you?"
              placeholder={
                'eg. "This problem is hard because there are so many jobs for the agent to filter out. Also, many times there are multiple listings for the same jobs. Asking the agent to rank them will also be very hard" '
              }
              rows="4"
            ></textarea>
            <span>
              How should we evaluate the performance of the agent? (Optional)
            </span>
            <textarea
              className="w-full p-2 border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500"
              value={performanceField}
              onChange={(e) => setPerformanceField(e.target.value)}
              // placeholder="What do you want the community to build for you?"
              placeholder={
                'eg. Run cosine-similarity between the llm embeddings of agent output vs hidden test set? Human Evaluation?'
              }
              rows="4"
            ></textarea>
            <span>Why would this agent be useful for you? (Required)</span>
            <textarea
              className="w-full p-2 border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500"
              value={reasonField}
              onChange={(e) => setReasonField(e.target.value)}
              // placeholder="What do you want the community to build for you?"
              required
              placeholder={
                'eg. This agent will help me save time and effort? Intellectual Curiosity? '
              }
              rows="4"
            ></textarea>
            <span>
              Would you use this agent if it completed the task succesfully?
              (Required)
            </span>
            {/* <textarea
              className="w-full p-2 border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500"
              value={reasonField}
              onChange={(e) => setReasonField(e.target.value)}
              // placeholder="What do you want the community to build for you?"
              required
              placeholder={
                'eg. This agent will help me save time and effort? Intellectual Curiosity? '
              }
              rows="4"
            ></textarea> */}
            <div>
              <div>
                <label>
                  <input
                    type="radio"
                    name="response"
                    value="yes"
                    checked={response === 'yes'}
                    onChange={handleResponseChange}
                  />
                  Yes
                </label>
              </div>
              <div>
                <label>
                  <input
                    type="radio"
                    name="response"
                    value="no"
                    checked={response === 'no'}
                    onChange={handleResponseChange}
                  />
                  No
                </label>
              </div>
              <div>
                <label>
                  <input
                    type="radio"
                    name="response"
                    value="maybe"
                    checked={response === 'maybe'}
                    onChange={handleResponseChange}
                  />
                  Maybe
                </label>
              </div>
            </div>

            <button
              className="mt-4 bg-indigo-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-md cursor-pointer"
              type="submit"
              onSubmit={handleRequestSubmit}
            >
              Post Suggestion
            </button>
          </form>
          <button
            className="mt-4 bg-red-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-md cursor-pointer"
            // type="submit"
            onClick={handleRequestCancel}
          >
            Cancel
          </button>
          {showWarning && (
            <div className="warning">
              Request Cancelled. Redirecting to Home
            </div>
          )}
        </div>
      </div>
    </>
  )
}
