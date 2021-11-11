import { Grid } from '@mui/material'
import { product } from '../../app/models/product'
import ProductCard from './ProductCard'
interface propType {
  products: product[]
}

const ProductsList = ({ products }: propType) => {
  return (
    <>
      <Grid container spacing={3}>
        {products.map((item) => (
          <Grid item xs={3} key={item.id}>
            <ProductCard item={item} />
          </Grid>
        ))}
      </Grid>
    </>
  )
}

export default ProductsList
