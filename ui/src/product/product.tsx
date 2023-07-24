import React from 'react'
import ProductButton from './product-button'

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
  return (
    <div style={styles.productContainer as React.CSSProperties}>
      <img src={item.image} alt={item.title} style={styles.productImage} />
      <div style={styles.productContainer as React.CSSProperties}>
        <h3>{item.title}</h3>
        <p>{item.description}</p>
        <h3>${item.price}</h3>
        <ProductButton item={item} />
      </div>
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
