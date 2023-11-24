
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import Box from '@mui/material/Box';

export default function CustomizedInputBase() {
  return (
    <Paper
      sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: '100%', borderRadius: 50,position: 'relative' }}
    >
      <IconButton sx={{ p: '10px' }} aria-label="menu">
        <SearchIcon />
      </IconButton>
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Searching for..."
        inputProps={{ 'aria-label': 'Searching for...' }}
      />
      {/* <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" /> */}
      <Box sx={{
        position: 'absolute',
        right: 0,
        height: '100%',
        borderTopRightRadius: 50,
        borderBottomRightRadius: 50,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
        width: '20%',
        cursor: 'pointer',
        backgroundColor: '#C24B5A'
      }}>
        Search
      </Box>
    </Paper>
  );
}