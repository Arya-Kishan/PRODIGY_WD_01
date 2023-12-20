import React from 'react'
import Spline from '@splinetool/react-spline'
import './First.scss'
import { useNavigate } from 'react-router-dom'

export default function First() {

  const navigate = useNavigate()

  const handleNavigate = () => {
    navigate("/home")
  }
  return (
    <div className='mainFirst'>

      <div className='firstText'>

        <i>We are Professional</i>

        <h1>DIGITAL MARKETING</h1>

        <p>Learn more about this fascinating miracle that we call our home , Planet Earth Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Vel libero quia doloremque veniam provident nostrum..</p>
        <button onClick={handleNavigate}>EXPLORE</button>

      </div>

      <Spline className='iframe'
        scene="https://prod.spline.design/jBfCZ-WKfb32gznG/scene.splinecode"
      />

    </div>
  )
}
