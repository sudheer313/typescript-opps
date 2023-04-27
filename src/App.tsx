import React from 'react';

import './App.css';
import Counter from './components/Counter';
import ItemForm from './components/ItemForm';
import ItemList from './components/ItemList';
import useItems from './hooks/useItems';


const App:React.FC=()=> {
  const {items,handleAddItem}=useItems();
  return (
    <div className="App">
  <Counter initialCount={0}/>
  <h1>TypeScript with React example</h1>
  <ItemForm onAddItem={handleAddItem}/>
  <ItemList items={items}/>
    </div>
  );
}

export default App;
