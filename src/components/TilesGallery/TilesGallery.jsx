import React from 'react'
import "./TilesGallery.css"

function TilesGallery({children}) {
  return (
    <div className='TilesGallery'>
      {children}
    </div>
  )
}

export default TilesGallery