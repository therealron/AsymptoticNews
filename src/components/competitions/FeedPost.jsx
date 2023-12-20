import React, { useContext, useEffect } from 'react'
import { useState } from 'react'

import { HandThumbUpIcon } from '@heroicons/react/24/solid'
import { useNavigate, useParams } from 'react-router-dom'
import { BASE_URL } from '../../utils/constants'
import axios from 'axios'
import { AuthContext } from '../../context/AuthContext'
import { Link } from 'react-router-dom'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'

import 'react-tabs/style/react-tabs.css'

export const FeedPost = ({ sub }) => {
  const { user } = useContext(AuthContext)
  const [likedArray, setLikedArray] = useState([])
  const [isLiked, setIsLiked] = useState(sub.likes.includes(user?._id))
  const [numUpVotes, setNumUpVotes] = useState(sub.likes.length)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const navigate = useNavigate()

  const [imgUrl, setImgUrl] = useState('')

  const getS3imgsrc = async (imgKey) => {
    try {
      const imgbody = { imgKey: imgKey }
      console.log(imgKey)

      // Return the Axios promise
      return axios
        .get(BASE_URL + 'competition/' + imgKey + '/retrieve_image', imgbody)
        .then((response) => {
          const fetchedData = response.data
          //   console.log('img_url = ' + fetchedData.img_url)
          return fetchedData.img_url
        })
    } catch (err) {
      console.error(err)
      return ''
    }
  }

  useEffect(() => {
    if (sub.img) {
      getS3imgsrc(sub.img)
        .then((url) => {
          setImgUrl(url)
        })
        .catch((error) => {
          console.error(error)
        })
    }
  }, [sub.img])

  const FullScreenImageModal = ({ isOpen, onClose, imgSrc }) => {
    if (!isOpen) return null

    return (
      <div
        className="fixed inset- bg-black bg-opacity-50 flex items-center justify-center z-50"
        onClick={onClose}
      >
        <div
          className="bg-white p-4 rounded-lg shadow-lg overflow-hidden"
          onClick={(e) => e.stopPropagation()}
        >
          <img
            src={imgSrc}
            alt="Full Size"
            // className="max-w-70p max-h-70p object-contain"
            className="w-72 h-72 object-contain"
          />
        </div>
      </div>
    )
  }

  const upvoteHandler = async (sub_id) => {
    if (user === null) {
      navigate('/login')
    }
    setLikedArray([...likedArray, sub_id])
    if (isLiked) {
      setNumUpVotes(numUpVotes - 1)
    } else {
      setNumUpVotes(numUpVotes + 1)
    }
    setIsLiked(!isLiked)
    try {
      await axios.put(BASE_URL + 'competition/' + sub_id + '/upvote', {
        userId: user?._id,
      })
      console.log(likedArray)
      // setUseEffect(!runUseEffect)
    } catch (err) {}
  }

  //   const getS3imgsrc = async (imgKey) => {
  //     try {
  //       const imgbody = {
  //         imgKey: imgKey,
  //       }

  //       console.log(imgKey)

  //       axios
  //         .get(BASE_URL + `competition/retrieve_image`, imgbody) // Use the actual endpoint URL
  //         .then((response) => {
  //           const fetchedData = response.data
  //           console.log('img_url = ' + fetchedData.img_url)
  //           return fetchedData.img_url
  //         })
  //         .catch((error) => {
  //           console.error(error)
  //         })

  //       return ''
  //     } catch (err) {
  //       return ''
  //     }
  //   }

  //   const imgurl = getS3imgsrc(sub.img)

  return (
    <>
      <div className="w-3/4 mx-auto p-4 border rounded-lg shadow-md bg-white">
        <div className="flex flex-row items-center justify-between mb-2">
          <span className="font-bold text-m text-gray-500">
            {sub.user_id.username}
          </span>
          <span className="text-sm text-gray-500">{sub.createdAt}</span>
        </div>

        {imgUrl && (
          <img
            src={imgUrl}
            alt="Thumbnail"
            onClick={() => setIsModalOpen(true)}
            className="cursor-pointer"
          />
        )}
        <FullScreenImageModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          imgSrc={imgUrl}
        />

        <h2 className="text-xl font-semibold mb-2">{sub.name}</h2>
        <p className="mb-4">{sub.desc}</p>
        <div className="flex justify-end items-center">
          {/* {console.log(
                  '!sub.likes.includes(user._id) = ' +
                    !sub.likes.includes(user._id)
                )} */}

          {!isLiked ? (
            <>
              <div className="text-center">
                <button
                  className="bg-gray-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded block"
                  onClick={() => upvoteHandler(sub._id)}
                >
                  <HandThumbUpIcon className="w-5 h-5 inline-block mr-1" />
                  Upvote
                </button>
                <div className="text-sm ">{numUpVotes} Upvotes</div>
              </div>
            </>
          ) : (
            <>
              <div className="text-center">
                <button
                  className="bg-blue-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded block"
                  onClick={() => upvoteHandler(sub._id)}
                >
                  <HandThumbUpIcon className="w-5 h-5 inline-block mr-1" />
                  Upvoted
                </button>
                <div className="text-sm ">{numUpVotes} Upvotes</div>
              </div>
            </>
          )}

          <div
            className="text-center"
            onClick={() => {
              if (user === null) {
                navigate('/login')
                return
              }
              navigate(`/submissionpost/${sub._id}`)
            }}
          >
            <button className="px-4 py-2 rounded text-white bg-teal-500 hover:bg-green-600">
              Comments
            </button>
            <div className="text-sm ">{sub.comments.length} Comments</div>
          </div>
        </div>
      </div>
    </>
  )
}

export default FeedPost
