import React, { useState } from 'react'
import { Button } from '@material-ui/core'

type productAttributes = {
  id: number
  title: string
  category: string
  description: string
  image: string
  price: number
}

type fullProductType = {
  item: productAttributes
}

const Product = ({ item }: fullProductType) => {
  const [cartItems, setCartItems] = useState<productAttributes[]>([])

  const handleAddToCart = (selectedItem: productAttributes) => {
    console.log('Adding to cart:', selectedItem)
    console.log('cart items before', cartItems)
    setCartItems((prevCartItems) => [...prevCartItems, selectedItem])
    console.log('cart items after', cartItems)
  }

  return (
    <div style={styles.productContainer as React.CSSProperties}>
      <img src={item.image} alt={item.title} style={styles.productImage} />
      <div style={styles.productContainer as React.CSSProperties}>
        <h3>{item.title}</h3>
        <p>{item.description}</p>
        <h3>${item.price}</h3>
      </div>
      <Button onClick={() => handleAddToCart(item)}>Add to cart</Button>
    </div>
  )
}

const styles = {
  productContainer: {
    padding: '10px',
    width: '200px',
  },
  productImage: {
    width: '100%',
    marginBottom: '10px',
  },
  productInfo: {
    textAlign: 'center',
  },
}

export default Product
