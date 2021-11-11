import axios from 'axios'
import { useState, useEffect } from 'react'
import { product } from '../../app/models/product'
import ProductsList from './ProductsList'

const Catalog = () => {
  const [products, setProducts] = useState<product[]>([])

  useEffect(() => {
    const getproducts = async () => {
      const results = await axios.get('https://localhost:7183/api/Products')
      setProducts(results.data)
    }
    getproducts()
  }, [])

  return (
    <>
      <ProductsList products={products} />
    </>
  )
}

export default Catalog
