import { ShoppingCartIcon } from '@heroicons/react/24/outline'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { Search } from './'
import { AuthContext } from '../context/AuthContext'
import { useContext, useEffect } from 'react'

const NavBar = () => {
  const { user } = useContext(AuthContext)
  // const { user, setUser } = useContext(UserContext);
  const cart = useSelector((state) => state.cart.productsNumber)
  const navigate = useNavigate()
  const { isFetching, dispatch } = useContext(AuthContext)

  const handleSuggestRequestNavigation = () => {
    if (user) {
      navigate('/createrequest')
    } else {
      navigate('/login')
    }
  }

  const handleSignOut = () => {
    console.log('here')
    localStorage.removeItem('user')
    dispatch({ type: 'LOGOUT' }) // Dispatch a logout action
    // dispatch({ type: 'LOGOUT' }) // Example action for Redux/Context API

    navigate('/login')
  }
  return (
    <header className="min-w-[1000px]">
      <div className="flex bg-amazonclone text-white h-[60px]">
        {/* Left */}
        <div className="flex items-center m-4">
          <Link to={'/'}>
            <img
              className="h-[60px]  m-2"
              src={'../images/logo.png'}
              alt="Amazon logo"
            />
          </Link>

          <div
            onClick={handleSuggestRequestNavigation}
            className="pr-4 pl-4 cursor-pointer"
          >
            <div className="pr-4 pl-4">
              <div className="text-xs xl:text-sm">Suggest a </div>
              <div className="text-sm xl:text-base font-bold">competition?</div>
            </div>
          </div>
        </div>
        {/* Middle */}
        <div className="flex items-center mx-auto  grow">
          {/* <Search /> */}
          {/* <h2 className="text-3xl font-bold text-indigo-500 mb-2"> */}

          <div className="ml-[30%] text-green-500 ">
            Our First competition is now live! :)
          </div>

          {/* </h2> */}
        </div>
        {/* Right */}

        <div className="flex items-center m-4">
          {/* <Link to={'/browse'}>
            <div className="pr-4 pl-4">
          
              <div className="text-sm xl:text-base font-bold">
                
                Browse
              </div>
            </div>
          </Link> */}
          {/* <Link to={'/forum'}>
            <div className="pr-4 pl-4">
              
              <div className="text-sm xl:text-base font-bold">
              
                Forum
              </div>
            </div>
          </Link> */}

          {/* <Link to={'/console'}>
            <div className="pr-4 pl-4">
              <div className="text-sm xl:text-base font-bold">Console</div>
            </div>
          </Link> */}
          {/* <Link to={'/checkout'}> */}
          <div className="flex pr-4 pl-4">
            {/* <ShoppingCartIcon className="h-[48px]" /> */}
            {/* <div className="relative">
                <div className="absolute right-[9px] font-bold m-2 text-orange-400">
                  {cart}
                </div>
              </div> */}
            {/* <div className="mt-7 text-xs xl:text-sm font-bold">Sign In</div> */}
            <div className="text-sm xl:text-base font-bold">
              {user ? (
                <>
                  <div>
                    <p>Hi {user.username} ;)</p>
                  </div>
                  <div>
                    <button onClick={handleSignOut}>Sign Out</button>
                  </div>
                </>
              ) : (
                <>
                  <Link to="/login">
                    <p> Sign In</p>
                  </Link>
                </>
              )}
            </div>
          </div>
          {/* </Link> */}
        </div>
      </div>
      {/* <div className="flex bg-amazonclone-light_blue text-white space-x-3 text-xs xl:text-sm p-2 pl-6">
        <div>Today's Deals</div>
        <div>Customer Service</div>
        <div>Registry</div>
        <div>Gift Cards</div>
        <div>Sell</div>
      </div> */}
    </header>
  )
}

export default NavBar
