import React from 'react'
import Spline from '@splinetool/react-spline'
import './First.scss'

export default function First() {

  console.log(window.innerWidth);
  console.log(window.innerHeight);
  return (
    <div className='mainFirst'>
      <div className='firstText'>
        <h2>PLANET</h2>
        <h1>EARTH</h1>
        <p>Learn more about this fascinating miracle that we call our home , Planet Earth Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel libero quia doloremque veniam provident nostrum..</p>
        <button>Explore</button>
      </div>
      <Spline className='iframe'
        scene="https://prod.spline.design/v7Yw7Xs115GGZMvs/scene.splinecode"
      />
    </div>
  )
}
