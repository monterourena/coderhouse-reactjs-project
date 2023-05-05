import React from 'react'
import "./ProductCarousel.css"

function ProductCarouselTemplate({children, theme}) {
  const sectionTitle = "The latest. Take a look at what's new, right now."
  return (
    <div className={`ProductCarousel ProductCarousel--${theme}`}>
      <div className={`SectionTitle SectionTitle--${theme}`}>{sectionTitle}</div>
      <div className={`SliderContainer SliderContainer--${theme}`}>{children}</div>
    </div>
  )
}

export default ProductCarouselTemplate