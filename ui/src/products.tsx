import { Grid } from '@material-ui/core'
import React from 'react'
import { useQuery } from '@tanstack/react-query'
import Product from './product/product'
import axios from 'axios'

type productAttributes = {
  id: number
  title: string
  category: string
  description: string
  image: string
  price: number
}

const getProducts = async () => {
  try {
    const response = await axios.get<productAttributes[]>('https://fakestoreapi.com/products')
    return response.data
  } catch (error) {
    console.error('Error fetching products:', error)
    return []
  }
}

export default function Products() {
  const { data } = useQuery<productAttributes[]>(['products'], getProducts)
  console.log(data)
  return (
    <Grid container>
      {data?.map((item) => (
        <Grid item key={item.id}>
          <Product item={item} />
        </Grid>
      ))}
    </Grid>
  )
}
