import React, { useState } from 'react'

type ItemFormProps={
    onAddItem:(name:string)=>void;
}

const ItemForm:React.FC<ItemFormProps>=({onAddItem})=>{
    const [newItemName, setNewItemName]=useState<string>("")
    const addItem = () => {
        onAddItem(newItemName);
        setNewItemName('');
    };
  return (
    <div>
        <input type="text"placeholder="Enter item Name" value={newItemName}
        onChange={(e)=>setNewItemName(e.target.value)}/>
        <button onClick={addItem}>Add Item</button>
    </div>
  )
}

export default ItemForm