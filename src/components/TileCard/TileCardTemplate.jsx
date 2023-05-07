import React from 'react'
import "./TileCard.css"

function TileCardTemplate({children, theme, picture}) {
  return (
    <div className={`TileCard TileCard--${theme}`}>
      <div className='ContentCTA'>
        {children}
      </div>
      <div className='TilePictureContainer'>
        <img className='TilePicture' src={picture} alt="" />
      </div>
    </div>
  )
}

export default TileCardTemplate