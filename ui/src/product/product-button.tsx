import React from 'react'
import ButtonGroup from '@material-ui/core/ButtonGroup'
import Badge from '@material-ui/core/Badge'
import Button from '@material-ui/core/Button'
import ActualCart from './actualCart'

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

export default function ProductButton({ item }: fullProductType) {
  const [itemCount, setItemCount] = React.useState(0)

  return (
    <div style={{ display: 'block', padding: 30 }}>
      <div>
        <ActualCart item={item} itemCount={itemCount} />
        <Badge color="secondary" badgeContent={itemCount}></Badge>
        <ButtonGroup>
          <Button
            onClick={() => {
              setItemCount(Math.max(itemCount - 1, 0))
            }}>
            {'-'}
          </Button>
          <Button
            onClick={() => {
              setItemCount(itemCount + 1)
            }}>
            {'+'}
          </Button>
        </ButtonGroup>
      </div>
    </div>
  )
}
