
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import Box from '@mui/material/Box';
import { useState } from 'react';
import { useSearchProductMutation } from '../../../features/api/productsApi';
import { useDispatch } from 'react-redux';
import { setSearchData } from '../../../features/slices/searchSlice';

export default function CustomizedInputBase() {


  const [search, setSearch] = useState<any>(null)
  const [searchProduct] = useSearchProductMutation()
  const dispatch = useDispatch()

  const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target?.value)
    searchProduct(e.target?.value)
    .unwrap()
    .then((response) => {
      dispatch(setSearchData(response))
    })
  }

  const handleSearch = () => {
    searchProduct(search)
    .unwrap()
    .then((response) => {
      dispatch(setSearchData(response))
    })
  }

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
        onChange={handleChange}
      />
      {/* <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" /> */}
      <Box
      onClick={handleSearch} 
      sx={{
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