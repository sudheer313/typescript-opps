import  { useState } from 'react'
export type Item={
    id:number
    name:string
}

const useItems = () => {
    const [items,setItems]=useState<Item[]>([])
    const handleAddItem=(name:string)=>{
        const newItem:Item={
            id:Date.now(),
            name
        }
        setItems([...items,newItem])
    }
    
  return (
{   items,handleAddItem}
  )
}

export default useItems