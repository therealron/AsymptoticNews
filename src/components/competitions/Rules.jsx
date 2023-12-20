import React from 'react'

export const Rules = ({ rules }) => {
  return (
    <div className="w-3/4 mx-auto p-4 border rounded-lg shadow-md bg-white">
      {rules.map((rule, index) => (
        <div key={index} className="my-3">
          {rule}
        </div>
      ))}
    </div>
  )
}

export default Rules
