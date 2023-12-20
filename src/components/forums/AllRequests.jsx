import React from 'react'
import { useState, useEffect } from 'react'
import { allposts } from './data/allrequests'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { BASE_URL } from '../../utils/constants'
const PostList = ({ posts }) => {
  return (
    <div>
      <>{posts.length}</>
      {posts.map((post) => (
        <Link to={`/post/${post._id}`}>
          <div
            key={post?.id}
            className="max-w-l mx-auto bg-white rounded-xl shadow-md overflow-hidden m-4"
          >
            <div className="md:flex">
              <div className="p-8">
                <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                  {post?.username}
                </div>

                <p className="text-gray-500 text-xs mb-2">
                  {new Date(post?.createdAt).toLocaleString()}
                </p>
                <h2 className="text-xl font-semibold text-gray-900">
                  {post?.title}
                </h2>
                <p className="mt-2 text-gray-600">
                  {post?.desc.slice(0, 100)}...
                </p>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  )
}

export const AllRequests = () => {
  const [posts, setPosts] = useState([])
  useEffect(() => {
    // Make an Axios GET request to fetch and sort the posts

    axios
      .get(BASE_URL + 'posts/timeline/forum') // Use the actual endpoint URL
      .then((response) => {
        console.log('response = ', response)
        setPosts(response.data)
      })
      .catch((error) => {
        console.error(error)
      })
  }, [])

  // const requests = posts

  return (
    <div>
      {/* <div>{Object.getOwnPropertyNames(requests)}</div> */}
      {/* {posts[0]['title']} */}
      <PostList posts={posts} />
    </div>
  )
}

export default AllRequests
