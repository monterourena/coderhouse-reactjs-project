import React, { useEffect, useState } from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'

async function getProduct(id){
  const response = await fetch(`https://fakestoreapi.com/products/${id}`)
  const data = await response.json()

  console.log(data)
  return data

}

function ItemDetailContainer() {

  const {id} = useParams()
  const [product, setProduct] = useState({});

  useEffect(()=>{
    getProduct(id).then((product)=>setProduct(product))

  },[])

  return (
    <ItemDetail product={product}/>
  )
}

export default ItemDetailContainer