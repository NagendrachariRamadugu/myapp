import { useEffect, useState } from 'react'
import './App.css'
import Header from './App/Header';
import Body from './App/Body.jsx';

function App() {
  const [item, setItem] = useState('posts');
  const [itemsInfo, setItemsInfo] = useState('');
  const info = ['posts', 'comments', 'users']
  const URL = 'https://jsonplaceholder.typicode.com/';
  useEffect(() => {
    const fetchItems = async () => {
      const response = await fetch(`${URL}/${item}`);
      const data = await response.json();
      setItemsInfo(data);
    }
    fetchItems();
  }, [item])
  return (
    <>
      <Header
        info = {info}
        item = {item}
        setItem = {setItem}
      />
      <Body
        itemsInfo = {itemsInfo}
      />
    </>
  )
}

export default App
