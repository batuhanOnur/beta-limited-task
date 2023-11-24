import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom"
import Homelayout from "./layouts/Homelayout"
import HomePage from "./pages/HomePage"

function App() {

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
