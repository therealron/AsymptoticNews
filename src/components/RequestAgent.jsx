import { React, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { BASE_URL } from '../utils/constants'

export default function RequestAgent() {
  const [requestText, setRequestText] = useState('')
  const [titleText, setTitleText] = useState('')
  const [titleError, setTitleError] = useState('')
  const [bodyError, setBodyError] = useState('')
  const [showWarning, setShowWarning] = useState(false)

  const navigate = useNavigate()

  const handleRequestSubmit = (e) => {
    e.preventDefault()
    // You can handle the submission of the request here, e.g., send it to a server or store it in state.
    const postData = {
      title: titleText,
      desc: requestText,
      username: 'ronjo',
      userId: '654ab114a3ae8d94a20870c4',
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

    // // Clear the input field after submission.
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
      navigate('/browse')
    }, 2000) // 2 seconds (2000 milliseconds)
  }

  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <h2 className="text-2xl font-semibold text-center text-indigo-700 mb-4">
          Make a Request to the Community
        </h2>
        <p className="text-gray-600 text-center mb-4">
          Please be respectful and as detailed as possible
        </p>
        <div className="bg-white  rounded-lg shadow-md w-full p-10 py-10">
          <textarea
            className="w-full text-2xl font-semibold mb-4 border-gray-300"
            placeholder="Type a one line summary or title of your competition"
            onChange={(e) => setTitleText(e.target.value)}
          ></textarea>
          <form onSubmit={handleRequestSubmit}>
            <textarea
              className="w-full p-2 border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500"
              value={requestText}
              onChange={(e) => setRequestText(e.target.value)}
              // placeholder="What do you want the community to build for you?"
              placeholder={BASE_URL + 'posts'}
              rows="4"
              required
            ></textarea>
            <button
              className="mt-4 bg-indigo-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-md cursor-pointer"
              type="submit"
              onSubmit={handleRequestSubmit}
            >
              Post Request to the Community
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
              Request Cancelled. Redirecting to Browse
            </div>
          )}
        </div>
      </div>
    </>
  )
}
