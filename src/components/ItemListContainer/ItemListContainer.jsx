import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ItemList from '../ItemList/ItemList'

async function getProducts(url){
  const response = await fetch(url)
  const data = await response.json()
  return data

}


const ItemListContainer = () => {

  const {id} = useParams()
  const [products, setProducts] = useState([])
  const type = false;

  // const type = id !== 0;

  useEffect(()=>{
    if(id){
      getProducts(`https://fakestoreapi.com/products/category/${id}`).then((products)=>setProducts(products))
    }
    else{getProducts(`https://fakestoreapi.com/products`).then((products)=>setProducts(products))}
  },[id])


  return (
    <div className='ItemListContainer text-xl flex justify-center items-center bg-background rounded-[16px] p-[32px]'>
      <ItemList products={products}/>
    </div>
  )
}

export default ItemListContainer