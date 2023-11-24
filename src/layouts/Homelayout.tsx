import Box from "@mui/material/Box"
import Header from "../components/Header"
import Sidebar from "../components/Sidebar"
import { Outlet } from "react-router-dom"


const Homelayout = () => {
  return (
    <Box sx={{
      position: 'relative'
    }}>
        <Header />

        <Box sx={{
          position: 'absolute',
          top: 180,
          left: 50
        }}>
          <Sidebar />
        </Box>

        <Box sx={{
          position: 'absolute',
          top: 180,
          left: 400
        }}>
          <Outlet />
        </Box>
    </Box>
  )
}

export default Homelayout