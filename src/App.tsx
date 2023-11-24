import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom"
import Homelayout from "./layouts/Homelayout"
import HomePage from "./pages/HomePage"
import { useCreateSessionQuery } from "./features/api/sessionApi"
import { useDispatch } from "react-redux"
import useSessionId from "./hooks/useSessionId"
import { useEffect } from 'react';
import { setSessionId } from "./features/slices/sessionSlice"


function App() {

  const createSes = useCreateSessionQuery(null)
  const sessionId = useSessionId()
  const dispatch = useDispatch()

  /* CREATE SESSION ID */
  useEffect(() => {
    if(createSes.isSuccess && sessionId === null) {
      dispatch(setSessionId(createSes.data))
    }
  },[createSes])

  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<Homelayout />}>
          <Route index element={<HomePage />}/>
        </Route>
      </>
    )
  )
  
  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
