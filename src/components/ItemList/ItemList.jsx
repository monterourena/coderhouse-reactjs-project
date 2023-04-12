import React from 'react'
import ItemCard from '../ItemCard/ItemCard'

function ItemList({ products }) {

    return(
        <div className='flex flex-1 flex-row flex-wrap justify-start gap-[32px]'> 
            {products.map((product) => <ItemCard product={product}/>)} 
        </div>
        )
    
}

export default ItemList