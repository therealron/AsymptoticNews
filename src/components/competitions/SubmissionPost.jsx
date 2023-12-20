import React, { useContext, useEffect } from 'react'
import { useState } from 'react'
import { HandThumbUpIcon } from '@heroicons/react/24/solid'
import { useParams } from 'react-router-dom'
import { BASE_URL } from '../../utils/constants'
import axios from 'axios'
import { AuthContext } from '../../context/AuthContext'
import { Link } from 'react-router-dom'

// const dummyComments = [
// {
//   id: '1',
//   body: 'This is comment 1',
//   comments: [],
// },
// {
//   id: '2',
//   body: 'this is comment 2',
//   comments: [],
// },
// {
//   id: '3',
//   body: 'this is comment 3',
//   comments: [],
// },
// ]

// const curr_post = {
//   title:
//     'An agent that summarizes news from different sources and provides it to me',
//   body:
//     'I would like an agent that can run every day, and summarize financial news for me' +
//     ' I would like the agent to think of 5 questions that a beginner in finance/economics would ask. ' +
//     ' and find answers to them. ',
// }
const formatDate = (date) => {
  return new Date(date).toLocaleString() // Formats date according to local conventions
}

export const SubmissionPost = () => {
  const [comments, setComments] = useState([])

  const { sub_id } = useParams()
  const { user } = useContext(AuthContext)
  const [Like, setLike] = useState(0)

  const [volunteer, setVolunteer] = useState(false)
  const [runUseEffect, setUseEffect] = useState(false)
  const [likedArray, setLikedArray] = useState([])
  const [isLiked, setIsLiked] = useState(false)
  const [numUpVotes, setNumUpVotes] = useState(0)

  const [post, setPost] = useState({})
  useEffect(() => {
    axios
      .get(BASE_URL + `competition/${sub_id}/submission`) // Use the actual endpoint URL
      .then((response) => {
        console.log('response = ', response.data)
        // setPost(response.data)
        const fetchedData = response.data
        setPost(fetchedData)
        console.log('posts = ' + fetchedData)

        if (fetchedData.likes) {
          setNumUpVotes(fetchedData.likes.length)
        }

        setComments(fetchedData.comments)

        if (fetchedData.likes) {
          setIsLiked(fetchedData.likes.includes(user._id))
        }
      })
      .catch((error) => {
        console.error(error)
      })
  }, [runUseEffect])

  const onComment = (newComment) => {
    if (newComment.body.trim() === '') {
      return
    }

    setComments((prev) => [newComment, ...prev])
    // setCommentBody('')
  }

  const upvoteHandler = async () => {
    setLikedArray([...likedArray, sub_id])
    if (isLiked) {
      setNumUpVotes(numUpVotes - 1)
    } else {
      setNumUpVotes(numUpVotes + 1)
    }
    setIsLiked(!isLiked)
    try {
      await axios.put(BASE_URL + 'competition/' + sub_id + '/upvote', {
        userId: user._id,
      })
      console.log(likedArray)
      // setUseEffect(!runUseEffect)
    } catch (err) {}
  }

  //   const trytobuildhandler = (e) => {
  //     // requests_volunteered_to_build
  //     setVolunteer(!volunteer)
  //     try {
  //       axios.put(BASE_URL + 'posts/' + sub_id + '/volunteer', {
  //         userId: user._id,
  //       })
  //     } catch (err) {
  //       console.log(err)
  //     }
  //   }

  const commentHandler = async (commentBody) => {
    if (commentBody.trim() === '') return
    try {
      const commentData = {
        postUserId: sub_id,
        comment_body: commentBody,
        commenterUserId: user._id,
        commenterUsername: user.username,
        likes: '',
        comments: [],
        // is_useful_to_poster: response,

        //   username: 'ronjo',
        //   userId: '654ab114a3ae8d94a20870c4',
        username: user.username,
        userId: user._id,
      }

      const res = await axios.post(
        BASE_URL + 'competition/' + sub_id + '/comment',
        commentData
      )
      //   console.log('runUseEffect = ' + runUseEffect)
      setUseEffect(!runUseEffect)
      //   console.log('runUseEffect = ' + runUseEffect)
    } catch (err) {
      console.log(err)
    }
  }

  console.log(isLiked)
  return (
    <div className="flex flex-col ">
      <div className="flex flex-col gap-3 w-screen p-6">
        <span className="text-3xl font-bold mb-4 border-b-2 pb-2">
          {post?.name}
          {/* {post_id} */}
        </span>
        <div className="border rounded p-4 border-b-2">
          <>
            <span className="text-m font-bold">{/* {post_id} */}</span>
            <p className="text-gray-700 text-m pb-10 pl-5 leading-relaxed border-b-2">
              {post?.desc}
            </p>
          </>

          {/* <>
            {post.performance !== '' ? (
              <>
                <span className="text-m font-bold">
                  How to evaluate the performance of the agent system?
                </span>
                <p className="text-gray-700 text-lg pb-10 pl-5 leading-relaxed border-b-2">
                  {post?.ambiguities}
                </p>
              </>
            ) : (
              <>
                <div></div>
              </>
            )}
          </> */}

          {/* <>
            {post.reason !== '' ? (
              <>
                <span className="text-m font-bold">
                  Why is this hard? Or What are the ambiguities?
                </span>
                <p className="text-gray-700 text-lg pb-10 pl-5 leading-relaxed border-b-2">
                  {post?.reason}
                </p>
              </>
            ) : (
              <></>
            )}
          </> */}
          <div>{Like ? <span>{Like} upvote(s)</span> : <></>}</div>
          <div>
            {!isLiked ? (
              <>
                <button
                  className="bg-gray-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded block"
                  onClick={upvoteHandler}
                >
                  <HandThumbUpIcon className="w-5 h-5 inline-block mr-1" />
                  Upvote
                </button>{' '}
                <div className="text-sm ">{numUpVotes} Upvotes</div>
              </>
            ) : (
              <>
                <button
                  className="bg-blue-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded block"
                  onClick={upvoteHandler}
                >
                  <HandThumbUpIcon className="w-5 h-5 inline-block mr-1" />
                  Upvoted
                </button>
                <div className="text-sm ">{numUpVotes} Upvotes</div>
              </>
            )}

            {/* {volunteer ? (
              <>
                <button
                  className="bg-indigo-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded ml-2"
                  onClick={trytobuildhandler}
                >
                  Added to Console
                </button>
              </>
            ) : (
              <>
                <button
                  className="bg-indigo-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded ml-2"
                  onClick={trytobuildhandler}
                >
                  Try to build
                </button>
              </>
            )} */}

            {/* {volunteer ? (
              <>
                <Link to="/createstart">
                  <button
                    className="bg-teal-300 hover:bg-green-700 text-white font-bold py-2 px-4 rounded ml-2"
                    // onClick={trytobuildhandler}
                  >
                    Build Now?
                  </button>
                </Link>
              </>
            ) : (
              <></>
            )} */}
          </div>
          <div className="flex flex-col gap-3  p-6">
            <CommentInput commentHandler={commentHandler} />
            {/* <CommentInput /> */}

            <div className=" flex flex-col gap-3 p-6 ">
              {/* {post.comments} */}
              {comments.map((comment) => (
                <div className="border rounded border-zinc-200">
                  <CommentItem
                    comment={comment}
                    runUseEffect={runUseEffect}
                    setUseEffect={setUseEffect}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const CommentInput = ({ commentHandler }) => {
  const [commentBody, setCommentBody] = useState('')

  return (
    <div className="flex flex-col">
      <textarea
        className="w-full p-2 border-gray-200 rounded-md focus:outline-none focus:ring focus:border-blue-500"
        value={commentBody}
        placeholder="What would you like to comment?"
        // className="border-[1px] rounded-full border-zinc-400 p-4 w-3/4 "
        // style={{ wordWrap: 'break-word' }}
        onChange={(event) => {
          // if (event.target.value !== '') {
          // console.log('event.target.value = ' + event.target.value)
          setCommentBody(event.target.value)
          // }
        }}
      ></textarea>

      <button
        class="border-[1px] rounded-full border-zinc-400 w-20 "
        onClick={() => {
          commentHandler(commentBody)
          setCommentBody('')
        }}
      >
        Comment
      </button>
    </div>
  )
}

const CommentItem = ({ comment, runUseEffect, setUseEffect }) => {
  const { user } = useContext(AuthContext)
  const [isReplying, setIsReplying] = useState(false)
  const [comments, setComments] = useState(comment.comments)

  const onComment = (newComment) => {
    setComments((prev) => [newComment, ...prev])
  }

  const deleteCommentHandler = async () => {
    try {
      const commentData = {
        userId: user._id,
        username: user.username,
        comment: JSON.stringify(comment),
      }

      const res = await axios.delete(
        BASE_URL + 'competition/' + comment.postUserId + '/comment',
        { data: commentData }
      )

      setUseEffect(!runUseEffect)
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <div className="flex flex-col border-[1px] border-zinc-500 rounded-md p-4">
      <span className="text-gray-700 text-xs ml-auto">
        {' '}
        {formatDate(comment.createdAt)}
      </span>

      <span className=" text-l"> {comment.comment_body}</span>
      <span className="text-gray-700 text-xs">
        {' '}
        {comment.commenterUsername}
      </span>

      {comment.commenterUserId == user._id ? (
        <span
          className="ml-auto mt-0 text-xs bg-red-500 text-white py-1 px-3 rounded hover:bg-red-600 cursor-pointer"
          onClick={deleteCommentHandler}
        >
          delete
        </span>
      ) : (
        <></>
      )}

      {/* {isReplying ? (
        <button
          className="border-[1px] rounded-full border-zinc-400 w-20"
          onClick={() => setIsReplying(false)}
        >
          Cancel
        </button>
      ) : (
        <button
          className="border-[1px] rounded-full border-zinc-400 w-20"
          onClick={() => setIsReplying(true)}
        >
          Reply
        </button>
      )} */}
      {/* {isReplying && <CommentInput onComment={onComment} />}
      <div className="flex flex-col gap-3">
        {comments.map((comment) => (
          <CommentItem comment={comment} />
        ))}
      </div> */}
    </div>
  )
}

export default SubmissionPost
