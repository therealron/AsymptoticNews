import { BrowserRouter, Routes, Route } from 'react-router-dom'
import {
  HomePage,
  NavBar,
  Checkout,
  SearchResults,
  ProductPage,
  Forum,
  Browse,
  Login,
  Register,
  CreateStartCompetition,
  RequestCompetition,
  SubmissionPost,
  Feedback,
  TalkToFounderButton,
} from './components'

import { Post } from './components/forums/Post'
import { Competition } from './components/competitions/Competition'
import CreateStart from './components/CreateStart'
import RequestAgent from './components/RequestAgent'
import CreateAgent from './components/CreateAgent'
import { useContext } from 'react'
import { AuthContext } from './context/AuthContext'
import { Navigate, useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'

const App = () => {
  const { user } = useContext(AuthContext)
  // const navigate = useNavigate()

  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        {/* <Route exact path="/" element={user ? <HomePage /> : <Register />} /> */}
        <Route exact path="/" element={<HomePage />} />
        <Route
          exact
          path="/login"
          element={user ? <Navigate to="/" /> : <Login />}
        />
        <Route
          exact
          path="/register"
          element={user ? <Navigate to="/" /> : <Register />}
        />
        <Route exact path="/browse" element={<Browse />} />
        <Route path="/search" element={<SearchResults />} />
        <Route path="/product/:id" element={<ProductPage />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/forum" element={<Forum />} />
        <Route path="/post/:post_id" element={<Post />} />
        <Route path="/createstart" element={<CreateStartCompetition />} />
        <Route path="/createcompetition" element={<CreateStartCompetition />} />
        <Route path="/createrequest" element={<RequestCompetition />} />
        <Route path="/createagent" element={<CreateAgent />} />
        <Route path="/competition/:comp_id" element={<Competition />} />
        <Route path="/submissionpost/:sub_id" element={<SubmissionPost />} />
        <Route path="/feedback" element={<Feedback />} />
      </Routes>
      <TalkToFounderButton />
    </BrowserRouter>
  )
}

export default App
