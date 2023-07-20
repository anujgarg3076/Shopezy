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
  updateItemCount: (count: number) => void
}

export const addToCart = ({ item }: ActualCartProps) => ({
    type: 'ADD_TO_CART',
    payload: item,
  });
  
  export const updateItemCount = ({  itemCount }: ActualCartProps) => ({
    type: 'UPDATE_ITEM_COUNT',
    payload: itemCount,
  });
  