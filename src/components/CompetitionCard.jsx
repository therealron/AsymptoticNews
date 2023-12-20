import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons'
import Modal from 'react-modal'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

Modal.setAppElement('#root') // Set the root element for accessibility

const CompetitionCard = ({ title, type, isLive, img, link }) => {
  const [popupVisible, setPopupVisible] = useState(false)
  const navigate = useNavigate()

  const togglePopup = (e) => {
    console.log('Here')
    e.stopPropagation()
    setPopupVisible(!popupVisible)
  }

  const cardClick = (e) => {
    if (isLive) {
      navigate('/competition/6551abe94111da2313f553d9')
    }
  }

  return (
    //   <div
    //     className="h-[420px] mx-auto  w-[420px] bg-white z-30 m-3 flex flex-col justify-center items-center hover:cursor-pointer"
    //     onClick={cardClick}
    //   >
    //     <div className="text-lg l:text-l font-semibold ml-4 ">{title}</div>
    //     <div className="text-m m:text-m font-semibold ">
    //       <span> Type:</span> <span className="text-blue-500">{type}</span>
    //       <FontAwesomeIcon
    //         icon={faInfoCircle}
    //         className="info-icon ml-1"
    //         onClick={togglePopup}
    //       />
    //       <>
    //         {isLive ? (
    //           <span className="text-green-500 ml-4">Live</span>
    //         ) : (
    //           <span className="text-yellow-500 ml-4">Coming soon!</span>
    //         )}
    //       </>
    //     </div>
    //     {popupVisible ? (
    //       <span className="text-xs">
    //         Competition will be qualitatively assessed by community
    //       </span>
    //     ) : (
    //       <></>
    //     )}

    //     <div className="h-[250px] m-1">
    //       <img
    //         className="h-[100%] w-[100%] object-cover hover:cursor-pointer"
    //         src={img}
    //         alt="Competition card"
    //         onClick={cardClick}
    //       />
    //     </div>
    //     {isLive ? (
    //       <>
    //         <div className="flex flex-row">
    //           <button
    //             className="bg-green-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded mx-3 w-32"
    //             onClick={togglePopup}
    //           >
    //             View
    //           </button>
    //           {/* <button className="bg-teal-500 hover:bg-blue-700 text-white text-sm font-bold py-2 px-4 rounded mx-3 w-32">
    //             View Submissions
    //           </button> */}
    //         </div>
    //       </>
    //     ) : (
    //       <>
    //         <div className="flex flex-row">
    //           <button className="bg-teal-500 hover:bg-blue-700 text-white text-sm font-bold py-2 px-4 rounded mx-3 w-32 h-12">
    //             Sign up?
    //           </button>
    //         </div>
    //       </>
    //     )}

    //     {/* <div className="text-xs xl:text-sm text-blue-400 ml-4">{link}</div> */}
    //   </div>
    // )
    <div
      className="h-[420px] mx-auto w-[420px] bg-white shadow-xl rounded-lg overflow-hidden hover:scale-105 transform transition duration-300 ease-in-out cursor-pointer"
      onClick={cardClick}
    >
      <div className="px-4 py-3 bg-indigo-500 text-white text-lg font-semibold">
        {title}
      </div>
      <div className="px-4 py-2 flex items-center justify-between bg-indigo-100">
        <span className="text-md font-semibold">
          Type: <span className="text-teal-500">{type}</span>
          <FontAwesomeIcon
            icon={faInfoCircle}
            className=" ml-3 text-indigo-500 hover:text-indigo-700 cursor-pointer"
            onClick={navigate('/competition/6551abe94111da2313f553d9')}
          />
        </span>

        {isLive ? (
          <span className="text-green-500">Live</span>
        ) : (
          <span className="text-yellow-600">Coming soon!</span>
        )}
      </div>
      {popupVisible ? (
        isLive ? (
          <span className="text-xs px-4 ">
            Competition will be qualitatively assessed by the community
          </span>
        ) : (
          <span className="text-xs px-4 ">
            Competition will be quantitatively assessed
          </span>
        )
      ) : (
        <></>
      )}

      <div className="h-[250px] m-1">
        <img
          className="h-full w-full object-cover"
          src={img}
          alt="Competition card"
        />
      </div>
      <div className="flex justify-center py-3 bg-indigo-100">
        {isLive ? (
          <button
            className="bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded mx-3"
            onClick={togglePopup}
          >
            View Competition
          </button>
        ) : (
          // <button className="bg-teal-500 hover:bg-teal-700 text-white text-sm font-bold py-2 px-4 rounded mx-3">
          //   Get notified when Live?
          // </button>
          <>
            <div className=" hover:bg-teal-700 text-teal text-sm font-bold py-2 px-4 rounded mx-3">
              Stay tuned!
            </div>
          </>
        )}
      </div>
    </div>
  )
}

export default CompetitionCard
