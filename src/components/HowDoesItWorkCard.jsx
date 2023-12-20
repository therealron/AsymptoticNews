import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons'
import Modal from 'react-modal'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

Modal.setAppElement('#root') // Set the root element for accessibility

const HowDoesItWorkCard = ({ title, type, isLive, img, link }) => {
  const [popupVisible, setPopupVisible] = useState(false)
  const navigate = useNavigate()

  const togglePopup = (e) => {
    console.log('Here')
    e.stopPropagation()
    setPopupVisible(!popupVisible)
  }

  const cardClick = (e) => {
    // navigate('/competition/6551abe94111da2313f553d9')
    return
  }

  return (
    // <div
    //   className="h-[420px] mx-auto  w-[420px] bg-white z-30 m-3 flex flex-col justify-center items-center hover:cursor-pointer"
    //   onClick={cardClick}
    // >
    //   <div className="text-lg l:text-l font-semibold ml-4 ">
    //     How does it work?
    //   </div>
    //   <div className="text-m m:text-m font-semibold ">
    //     <span> Step 1: Click on the Competition</span>
    //   </div>
    //   <div className="text-m m:text-m font-semibold ">
    //     <span> Step 2: Go on the "Submit" tab</span>
    //   </div>
    //   <div className="text-m m:text-m font-semibold ">
    //     <span> Step 3: Submit the output of your model</span>
    //   </div>
    //   <div className="text-m m:text-m font-semibold ">
    //     <span> Step 4: Upvote the solutions you like the most. </span>
    //   </div>
    //   <div className="text-m m:text-m font-semibold ">
    //     <span> Done!</span>
    //   </div>

    //   {/* <div className="text-xs xl:text-sm text-blue-400 ml-4">{link}</div> */}
    // </div>
    <div
      className="mx-auto w-[420px] bg-gradient-to-r from-indigo-500 to-teal-500 text-white shadow-lg rounded-lg overflow-hidden hover:scale-105 transform transition-all duration-300 ease-in-out "
      onClick={cardClick}
    >
      <div className="p-5">
        <h2 className="text-2xl font-bold mb-4">How does it work?</h2>

        <div className="space-y-2">
          <div className="flex items-center">
            <div className="bg-white text-purple-500 rounded-full h-8 w-8 flex items-center justify-center mr-2">
              1
            </div>
            <span>Click on the Competition</span>
          </div>

          <div className="flex items-center">
            <div className="bg-white text-purple-500 rounded-full h-8 w-8 flex items-center justify-center mr-2">
              2
            </div>
            <span>Generate your solution in any way you like</span>
          </div>

          <div className="flex items-center">
            <div className="bg-white text-purple-500 rounded-full h-8 w-8 flex items-center justify-center mr-2">
              3
            </div>
            <span>Submit the output of your model</span>
          </div>

          <div className="flex items-center">
            <div className="bg-white text-purple-500 rounded-full h-8 w-8 flex items-center justify-center mr-2">
              4
            </div>
            <span>Critique the solutions of your peers</span>
          </div>

          <div className="text-center mt-4 font-bold">Done!</div>
        </div>
      </div>
    </div>
  )
}

export default HowDoesItWorkCard
