import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Typography,
  Avatar,
} from '@mui/material'
import { makeStyles } from '@mui/styles'
import { product } from '../../app/models/product'
import { Link, useNavigate } from 'react-router-dom'

interface propType {
  item: product
}

interface pathType {
  path: string
}
const ProductCard = ({ item }: propType) => {
  const navigate = useNavigate()

  const useStyles = makeStyles({
    cardStyle: {
      backgroundColor: '#DFD8CA',
      transition: 'transform 1s',
      opacity: 0.8,
      '&:hover': {
        opacity: 1.5,
        transform: 'scale(1.1)',
      },
    },
  })

  const styles = useStyles()

  const routeChange = ({ path }: pathType) => {
    navigate(path)
  }

  return (
    <>
      <Card className={styles.cardStyle} sx={{ maxWidth: 345 }}>
        <CardHeader
          avatar={
            <Avatar
              sx={{ color: 'white', bgcolor: 'blue', fontWeight: 'bold' }}
            >
              {item.name.charAt(0).toUpperCase()}
            </Avatar>
          }
          title={item.name}
          titleTypographyProps={{
            sx: { fontWeight: 'bold', color: 'secondary.main' },
          }}
        />
        <CardMedia
          component='img'
          image={item.pictureUrl}
          alt={item.name}
          sx={{
            height: 140,
            backgroundSize: 'contain',
            bgcolor: 'primary.light',
            cursor: 'pointer',
          }}
          onClick={() => routeChange({ path: `/products/:${item.id}` })}
        />
        <CardContent sx={{ color: 'blue' }}>
          <Typography gutterBottom variant='h5'>
            ${(item.price / 100).toFixed(2)}
          </Typography>
          <Typography variant='body2'>
            {item.brand} /{item.type}
          </Typography>
        </CardContent>
        <CardActions>
          <Button variant='contained' color='primary' size='small'>
            Add to Cart
          </Button>

          <Button
            component={Link}
            to={`/products/:${item.id}`}
            variant='contained'
            color='primary'
            size='small'
            sx={{ marginLeft: 'auto' }}
          >
            View
          </Button>
        </CardActions>
      </Card>
    </>
  )
}

export default ProductCard
