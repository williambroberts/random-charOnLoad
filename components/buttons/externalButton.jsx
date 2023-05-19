import Link from 'next/link'
import React from 'react'

const ExternalButton = ({link,icon,name}) => {
  return (
    <a href={link} className='light-button' target='_blank'>
       <span className='page-item-icon'>{icon}</span> 
        <span className='page-item-name'>{name}</span>
    </a>
  )
}

export default ExternalButton