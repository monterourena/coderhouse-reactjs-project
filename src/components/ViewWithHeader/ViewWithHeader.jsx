import React from 'react'
import "./ViewWithHeader.css"
function ViewWithHeader({children, title, description}) {
  return (
    <div className='ViewWithHeader'>
      <div className='ViewWithHeader--Header'>
        <p className='Header--Title'>{title}</p>
        <p className='Header--Description'>{description}</p>
      </div>
      <div className='ViewWithHeader--View'>
        <div className='View--Content'>{children}</div>
      </div>
    </div>
  )
}

ViewWithHeader.defaultProps = {
  title: "title",
  description: "description",
};

export default ViewWithHeader