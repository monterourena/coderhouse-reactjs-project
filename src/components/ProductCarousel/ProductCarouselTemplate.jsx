import React from 'react'
import "./ProductCarousel.css"

function ProductCarouselTemplate({children}) {
  const sectionTitle = "The latest. Take a look at what's new, right now."
  return (
    <div className='ProductCarousel'>
      <div className='SectionTitle'>{sectionTitle}</div>
      <div className='SliderContainer'>{children}</div>
    </div>
  )
}

export default ProductCarouselTemplate