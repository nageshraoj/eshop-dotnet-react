import { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { product } from '../../app/models/product'
import CircularProgress from '@mui/material/CircularProgress'
import {
  Divider,
  Grid,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Typography,
} from '@mui/material'

const ProductsDetails = () => {
  const { id } = useParams()
  const [item, setItem] = useState<product>()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const getItem = async () => {
      try {
        const result = await axios.get(
          `https://localhost:7183/api/Products/${id?.replace(':', '')}`
        )

        setItem(result.data)
        setLoading(false)
      } catch (error) {
        console.log(error)
      }
    }
    getItem()
  }, [id])

  return (
    <>
      {loading ? (
        <Stack
          sx={{
            color: 'grey.500',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
          spacing={2}
          direction='row'
        >
          <CircularProgress color='inherit' />
        </Stack>
      ) : item ? (
        <Grid container spacing={6}>
          <Grid item xs={6}>
            <img src={item.pictureUrl} alt={item.name} />
          </Grid>
          <Grid item xs={6}>
            <Typography variant='h3'>{item?.name}</Typography>

            <Divider sx={{ mb: 3 }} />
            <Typography variant='h5'>
              ${(item?.price / 100).toFixed(2)}
            </Typography>

            <Divider sx={{ mb: 3 }} />
            <TableContainer>
              <Table>
                <TableBody>
                  <TableRow>
                    <TableCell>Name</TableCell>
                    <TableCell>{item.name}</TableCell>
                  </TableRow>

                  <TableRow>
                    <TableCell>Description</TableCell>
                    <TableCell>{item.description}</TableCell>
                  </TableRow>

                  <TableRow>
                    <TableCell>Brand</TableCell>
                    <TableCell>{item.brand}</TableCell>
                  </TableRow>

                  <TableRow>
                    <TableCell>Type</TableCell>
                    <TableCell>{item.type}</TableCell>
                  </TableRow>

                  <TableRow>
                    <TableCell>Quantity in Stock</TableCell>
                    <TableCell>{item.quantityInStock}</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </Grid>
        </Grid>
      ) : (
        <h1>Not product found</h1>
      )}
    </>
  )
}

export default ProductsDetails
