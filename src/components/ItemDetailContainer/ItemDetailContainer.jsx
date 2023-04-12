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
    <div className='ItemDetailContainer text-xl flex justify-center items-center bg-white rounded-[16px] px-32 py-16'>
      <ItemDetail product={product}/>
    </div>
  )
}

export default ItemDetailContainer