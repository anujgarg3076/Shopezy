import React from 'react'
import Products from './products'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ShoppingCart } from './product/shoppingCart'

const queryClient = new QueryClient()

export const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Products />
      <ShoppingCart />
    </QueryClientProvider>
  )
}
