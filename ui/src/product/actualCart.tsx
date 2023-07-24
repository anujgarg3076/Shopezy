import React from 'react'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'

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

type ActualCartProps = {
  item: fullProductType['item']
  itemCount: number
}

const ActualCart = ({ item, itemCount }: ActualCartProps) => {
  console.log('item id', item.title)
  console.log('item count', itemCount)
  const totalBill = item.price * itemCount
  console.log('item count', totalBill)

  const handleOpenForm = () => {
    // Implement any logic you want to perform when the form is opened
    console.log('Form opened!')
    // You can also update the state if needed to show the form instead of using a console.log
  }

  return (
    <div>
      <div style={{ position: 'fixed', top: '20px', right: '20px', zIndex: 1000 }}>
        <ShoppingCartIcon style={{ fontSize: '4rem', cursor: 'pointer' }} />
        <button onClick={handleOpenForm} style={{ fontSize: '1rem', cursor: 'pointer' }}>
          Open Form
        </button>

        <form
          style={{
            width: '300px',
            padding: '20px',
            border: '1px solid #ccc',
            position: 'absolute',
            top: '70px',
            right: '20px',
            backgroundColor: '#fff',
          }}>
          <h3>Total Bill</h3>
          <p>Item: {item.title}</p>
          <p>Item Count: {itemCount}</p>
          <p>Total Price: ${totalBill}</p>
        </form>
      </div>
    </div>
  )
}

export default ActualCart
