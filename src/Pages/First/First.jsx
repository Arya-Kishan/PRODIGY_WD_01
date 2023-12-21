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

        <h1>DIGITAL MARKETER</h1>

        <p>Learn more about this fascinating miracle that we call digital Marketing a fascinating and adventourous exploration 
        with Kakashi Sensei in the world of Naruto Verse along with Carry Minati i.e Ajay Nagar</p>
        <button onClick={handleNavigate}>EXPLORE</button>

      </div>

      <Spline className='iframe'
        scene="https://prod.spline.design/jBfCZ-WKfb32gznG/scene.splinecode"
      />

    </div>
  )
}
