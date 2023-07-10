import React from 'react'
import "./Loading.scss"

function LoadingScreen() {
  return (
    <div className='col-sm-12 text-center padding_top'>
      <img className='img-fluid loading_screen' src='../images/loading.gif' />
    </div>
  )
}

export default LoadingScreen