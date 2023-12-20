import React from 'react'
import { useState } from 'react'
import { AuthContext } from '../../context/AuthContext'
// import { UploadIcon } from '@heroicons/react/solid'
import { useContext, useCallback } from 'react'
import { BASE_URL } from '../../utils/constants'
import { useDropzone } from 'react-dropzone'
import axios from 'axios'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUpload } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom'
import { useLocation } from 'react-router-dom'

export const Submit = ({ comp_id, onSubmissionSuccess }) => {
  const [name, setName] = useState('')
  const [desc, setDesc] = useState('')
  const [modelOutput, setModelOutput] = useState('')
  const [codeLink, setCodeLink] = useState('')
  const [isPrivate, setIsPrivate] = useState(false)
  const { user } = useContext(AuthContext)
  const [fileUpload, setFileUpload] = useState('')
  const location = useLocation()
  const [fileUploadedSuccesfully, setFileUploadedSuccesfully] = useState(false)
  const [imgKey, setImgKey] = useState('')
  const [waitForFileUpload, setWaitForFileUpload] = useState(false)
  const navigate = useNavigate()

  const onDrop = useCallback((files) => {
    const formData = new FormData()
    formData.append('file', files[0])
    setWaitForFileUpload(true)

    axios
      .post(BASE_URL + `competition/upload_file`, formData, {
        onUploadProgress: (p) => {
          const percentCompleted = Math.round((p.loaded * 100) / p.total)
          setFileUpload({ fileName: files[0].name, percentCompleted })
          console.log(`${percentCompleted}% uploaded`)
        },
      }) // Use the actual endpoint URL
      .then((response) => {
        const fetchedData = response.data

        console.log(fetchedData)
        setImgKey(fetchedData.key)
        setWaitForFileUpload(false)
      })
      .catch((error) => {
        console.error(error)
        setWaitForFileUpload(false)
      })
  })

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    // Define callbacks like 'onDrop'
    onDrop: onDrop,
  })

  const handleSubmit = (event) => {
    event.preventDefault()
    if (user === null) {
      navigate('/login', { state: { from: location.pathname } })
      return
    }
    // Handle the submission logic here
    const newSubmission = {
      name: name,
      desc: desc,
      user_id: user._id,
      output: modelOutput,
      code_link: codeLink,
      competition_id: comp_id,
      is_private: isPrivate,
      img: imgKey,
    }

    axios
      .post(BASE_URL + `competition/${comp_id}/submission`, newSubmission) // Use the actual endpoint URL
      .then((response) => {
        const fetchedData = response.data
        // setDiscussion(fetchedData.discussion)

        // console.log(fetchedData)
        onSubmissionSuccess()
      })
      .catch((error) => {
        console.error(error)
      })

    console.log({ modelOutput, codeLink })
  }

  return (
    <div className="p-4">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label
            htmlFor="Name for your submission"
            className="block text-sm font-medium text-gray-700"
          >
            Give a name to your submission
          </label>
          <textarea
            id="name"
            rows="1"
            required
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Name your submission"
          ></textarea>
        </div>
        <div>
          <label
            htmlFor="Name for your submission"
            className="block text-sm font-medium text-gray-700"
          >
            Give a brief description of the method you used
          </label>
          <textarea
            id="desc"
            rows="2"
            required
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
            placeholder="Describe the method you used"
          ></textarea>
        </div>
        <div>
          <label
            htmlFor="modelOutput"
            className="block text-sm font-medium text-gray-700"
          >
            Model Output
          </label>
          <textarea
            id="modelOutput"
            rows="6"
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            value={modelOutput}
            required
            onChange={(e) => setModelOutput(e.target.value)}
            placeholder="Enter the output of your model here"
          ></textarea>
        </div>
        <div>
          <label
            htmlFor="codeLink"
            className="block text-sm font-medium text-gray-700"
          >
            Code Link (Optional for now. In order to win, you may have to
            provide a way to reproduce the output)
          </label>
          <textarea
            id="codeLink"
            rows="2"
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            value={codeLink}
            onChange={(e) => setCodeLink(e.target.value)}
            placeholder="Enter the link to your code"
          ></textarea>
        </div>
        <label htmlFor="isPrivate" className="mr-2">
          Make your code link private
        </label>
        <input
          type="checkbox"
          id="isPrivate"
          checked={isPrivate}
          onChange={(e) => setIsPrivate(e.target.checked)}
        />
        <div
          {...getRootProps()}
          style={{
            border: '2px dashed #eeeeee',
            padding: '20px',
            textAlign: 'center',
          }}
          className="cursor-pointer"
        >
          <input {...getInputProps()} />
          {/* {isDragActive ? (
            <p>Drop the files here ...</p>
          ) : ( */}
          <p>Upload the screen shot of the result! (Optional)</p>
          {/* )} */}
          <FontAwesomeIcon icon={faUpload} style={{ color: 'black' }} />
          {imgKey !== '' ? (
            <>
              <p className=" text-green-500">Screen Shot uploaded</p>
            </>
          ) : (
            <></>
          )}
        </div>
        {waitForFileUpload ? (
          <>
            <div>Waiting for File Upload ...</div>
          </>
        ) : (
          <>
            <button
              type="submit"
              className="w-full px-4 py-2 text-white bg-indigo-500 rounded-md hover:bg-blue-700 focus:outline-none focus:bg-blue-700"
            >
              Submit
            </button>
          </>
        )}
      </form>
    </div>
  )
}
//   return <div>Submit</div>
// }

export default Submit
