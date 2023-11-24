import { useState } from "react";
import { Box, ButtonGroup, CardContent, CardMedia, Chip, IconButton, Rating, Stack, Typography } from "@mui/material"
import { IProduct } from "../../interfaces/ProductInterface"
import Card from "@mui/material/Card"
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import VisibilityIcon from '@mui/icons-material/Visibility';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useAddProductToCartMutation } from "../../features/api/cartApi";

type Props = {
  product: IProduct
}

const ProductCard:React.FC<Props> = (props) => {

  const [quantity,setQuantity] = useState<number>(0)
  const [showButtonGroup, setShowButtonGroup] = useState<boolean>(false)
  const [addProductToCart] = useAddProductToCartMutation()

  const addQuantity = () => {
    setQuantity(prev => prev + 1)
  }

  const removeQuantity = () => {
    setQuantity(prev => prev - 1)
  }

  const addShoppingCart = () => {
    addProductToCart(props.product.id)
  }

  return (
    
    <Card 
    sx={{ width: 300 }} 
    onMouseOver={ () => setShowButtonGroup(true)}
    onMouseLeave={ () => setShowButtonGroup(false)}
    >
      <Box sx={{ position: 'relative'}}>
        
        <CardMedia
          component="img"
          height="350"
          image={props.product.image}
          alt={props.product.name}
          sx={{ 
            backgroundColor: '#F7F9FC',
          }}
        />
        <Chip 
        label={props.product.discount}  
        sx={{
          position: 'absolute',
          top:15,
          left:15,
          backgroundColor: '#C24B5A',
          '& .MuiChip-label': { 
            color: '#fff'
          }
        }}
        />
        {
          showButtonGroup && 
          <Box sx={{ display: 'flex', justifyContent: 'center', position: 'absolute', bottom: 5, width: '100%' }}>
            <ButtonGroup 
            variant="outlined"
            disableElevation 
            sx={{ backgroundColor: '#ffff' }}
            >
                <IconButton>
                  <VisibilityIcon />
                </IconButton>

                <IconButton>
                  <FavoriteBorderIcon />
                </IconButton>

                <IconButton onClick={addShoppingCart}>
                  <ShoppingCartIcon />
                </IconButton>
            </ButtonGroup>
          </Box>
        }
        
      </Box>

      <CardContent sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
        <Box>
          <Typography variant="h6">{props.product.name}</Typography>
          <Stack direction="row" alignItems="center" gap={1}>
            <Rating name="card-rating" value={props.product.rating} readOnly />
            <Typography variant="h6" color="text.secondary" >({props.product.rating})</Typography>
          </Stack>
          <Stack direction="row" alignItems="center" gap={1} sx={{marginTop: 1}}>
            <Typography color="#C24B5A">${props.product.price}</Typography>
            <Typography color="text.secondary" sx={{ textDecoration: 'line-through'}}>${props.product.originalPrice}</Typography>
          </Stack>
        </Box>

        <Box>
          <Stack gap={1} alignItems="center">
              <IconButton
              onClick={removeQuantity} 
              aria-label="remove" 
              sx={{
                border: '1px solid #C24B5A',
                borderRadius: 1,
                visibility: quantity === 0 ? 'hidden': 'visible'
              }}>
                <RemoveIcon sx={{ color: '#C24B5A' }}/>
              </IconButton>

              <Typography sx={{
                visibility: quantity === 0 ? 'hidden': 'visible'
              }}>{ quantity }
              </Typography>

            <IconButton
            onClick={addQuantity} 
            aria-label="add" 
            sx={{
              border: '1px solid #C24B5A',
              borderRadius: 1,
            }}>
              <AddIcon sx={{ color: '#C24B5A' }}/>
            </IconButton>  
              
          
          </Stack>
        </Box>
      </CardContent>
    </Card>
  )
}

export default ProductCard