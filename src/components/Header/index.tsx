import { Typography } from '@mui/material';
import HeaderIcons from './contents/HeaderIcons';
import SearchBox from './contents/SearchBox';
import Grid from '@mui/material/Grid';

const Header = () => {
  return (
    <Grid direction="row" item xs={12} spacing={1} container sx={{ backgroundColor: '#ffff', height: '10vh', alignItems: 'center', padding: 1}}>
        <Grid item xs={4}>
          <Typography variant='h2' sx={{ color: 'black', textTransform: 'uppercase'}}>logo</Typography>
        </Grid>
        <Grid item xs={4}>
          <SearchBox />
        </Grid>
        <Grid item xs={3} alignItems="flex-end">
          <HeaderIcons />
        </Grid>
    </Grid>
  )
}

export default Header