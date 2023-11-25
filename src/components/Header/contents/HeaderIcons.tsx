import { ReactNode } from "react";
import Badge from "@mui/material/Badge"
import Box from '@mui/material/Box'
import Stack from "@mui/material/Stack";
import LocalMallIcon from '@mui/icons-material/LocalMall';
import PersonIcon from '@mui/icons-material/Person';
import useCartQuantity from "../hooks/useCartQuantity";


const Circle = ({
    children
}: {
    children:ReactNode
}) => {
    return (
        <Box 
        component="span" 
        sx={{ 
            width: 40,
            height: 40,
            borderRadius: 50,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#F3F5F9'
        }}
        >
            { children }
        </Box>
    )
} 

const HeaderIcons = () => {

    const badgeContent = useCartQuantity()

    return (
        <Stack spacing={2} direction="row" justifyContent='center'>
            <Badge color="secondary" invisible={false}>
                <Circle>
                    <PersonIcon style={{
                        color: '#858686'
                    }} />
                </Circle>
            </Badge> 
            
            <Badge color="error" badgeContent={badgeContent ?? 0}>
                <Circle>
                    <LocalMallIcon style={{
                        color: '#858686'
                    }}/>
                </Circle>
            </Badge> 
        </Stack>
    )
}

export default HeaderIcons