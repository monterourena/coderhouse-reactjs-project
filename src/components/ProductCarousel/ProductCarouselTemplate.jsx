import React from 'react'
import "./ProductCarousel.css"

function ProductCarouselTemplate({children,sectionTitle, theme}) {
  return (
    <div className={`ProductCarousel ProductCarousel--${theme}`}>
      <div className={`SectionTitle SectionTitle--${theme}`}>{sectionTitle}</div>
      <div className={`SliderContainer SliderContainer--${theme}`}>{children}</div>
    </div>
  )
}

export default ProductCarouselTemplate