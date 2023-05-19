"use client"
import React from 'react'
import IconReload from '../icons/navigation/reload';

const PageReloadButton = () => {
    const handleReload = ()=>{
        location.reload();
    }
  return (
    <button onClick={()=>handleReload()} className='reload-button'><IconReload/> Reload Page</button>
  )
}

export default PageReloadButton