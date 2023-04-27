import React from 'react'
type Item={
    id:number
    name:string
}
type ItemListProps={
    items:Item[];
}

const ItemList:React.FC<ItemListProps> = ({items}) => {
  return (
    <ul>
        {items.map((item)=>(<li key={item.id}>{item.name}</li>)
            
        )}
    </ul>
  )
}

export default ItemList
