import React from 'react'

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
  item: fullProductType['item'] // Use fullProductType to get the correct item type
  itemCount: number // Correct the prop name to itemCount
}

const ActualCart = ({ item, itemCount }: ActualCartProps) => {
  console.log('item id' + item.id)
  console.log('item count' + itemCount)
  return <div></div>
}
export default ActualCart
