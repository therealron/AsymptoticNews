import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { BASE_URL } from '../utils/constants'

const Feedback = () => {
  const [email, setEmail] = useState('')
  const [feedback, setFeedback] = useState('')
  const [submitSuccesful, setSubmitSuccesful] = useState(false)
  const navigate = useNavigate()

  const handleSubmit = (event) => {
    event.preventDefault()
    // Handle the form submission logic
    console.log({ email, feedback })

    // You can handle the submission of the request here, e.g., send it to a server or store it in state.
    const feedbackData = {
      email: email,
      feedback: feedback,
    }
    axios
      .post(BASE_URL + 'feedback/feedback', feedbackData)
      .then((res) => {
        console.log(res)
        // setRequestText('')
        // navigate('/forum')
        setSubmitSuccesful(true)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  const giveFeedback = () => {}

  return (
    <div className="p-6 max-w-m w-3/4 mx-auto bg-white rounded-xl shadow-md flex flex-col items-center space-y-4">
      <h2 className="text-xl font-semibold text-gray-800">
        Contact the founder
      </h2>
      <p className="text-xl font-semibold text-indigo-800">
        All feedback/messages are welcome :)
      </p>
      <p className="text-m font-semibold text-gray-800">
        I will respond to you through your email
      </p>
      {/* <h4 className="text-xs font-semibold text-gray-800">How </h4> */}
      <form onSubmit={handleSubmit} className="w-full">
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
            placeholder="Enter your email"
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="feedback"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Feedback/Questions
          </label>
          <textarea
            id="feedback"
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
            placeholder="Give feedback /  Request a feature / Schedule a virtual coffee chat? "
          />
        </div>

        {submitSuccesful ? (
          <div>Thanks for the feedback! I'll reach out within 1 day!</div>
        ) : (
          <>
            <button
              type="submit"
              className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              onSubmit={giveFeedback}
            >
              Submit
            </button>
          </>
        )}
      </form>
    </div>
  )
}

export default Feedback
