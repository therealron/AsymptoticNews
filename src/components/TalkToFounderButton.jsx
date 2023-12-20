import React from 'react'
import { useNavigate } from 'react-router-dom'

export const TalkToFounderButton = () => {
  const navigate = useNavigate()

  const handleButtonClick = () => {
    navigate('/feedback')
  }

  return (
    <button
      id="reportBugButton"
      onClick={handleButtonClick}
      className="fixed bottom-4 right-4 bg-indigo-500 hover:bg-teal-500 text-white p-4 rounded-full shadow-md cursor-pointer focus:outline-none focus:ring-2 focus:ring-teal-300 focus:ring-opacity-50"
      aria-label="Report a Bug"
    >
      Contact the founder?
    </button>
  )
}

export default TalkToFounderButton
