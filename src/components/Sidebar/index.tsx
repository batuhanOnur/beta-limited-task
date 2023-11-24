import Box from "@mui/material/Box"
import Icon from "@mui/material/Icon"
import Paper from "@mui/material/Paper"
import Stack from "@mui/material/Stack"
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { sidebarLinks } from "./contents/links"

const Sidebar = () => {
  return (
    <Paper
      sx={{ padding: 2, display: 'flex', flexDirection: 'column', justifyContent: 'center', width: '300px', borderRadius: 1,position: 'relative' }}
    >
        <Box sx={{
            borderBottom: '2px solid #EFCACE'
        }}>
            <p className="text-lg font-bold">Top Categories</p>
        </Box>

        <Stack sx={{ marginTop: 5 }}>
        {
            sidebarLinks.map((link) => {
                return (
                    <Stack key={link.id} direction="row" spacing={3} sx={{marginBottom: 2,position:'relative' }} >
                        <Icon>{ link.icon }</Icon>
                        <p>{ link.name } </p>
                        {
                            link.hasSubMenu &&
                            <Box sx={{ position: 'absolute', right: 0 }}>
                                <KeyboardArrowRightIcon />
                            </Box>
                        }
                    </Stack>
                    
                )
            })
        } 
        </Stack>
    </Paper>
  )
}

export default Sidebar