import React, { useRef, useState } from 'react'
import './Navbar.scss'

export default function Navbar() {

    const [show,setShow] = useState(false)

    const ul = useRef(null)

    const handleNav1 = ()=>{
        ul.current.style.display = 'flex'
        ul.current.style.transform = 'translateX(-0%)'
        setShow(true)
    }
    
    const handleNav2 = ()=>{
        ul.current.style.display = 'flex'
        ul.current.style.transform = 'translateX(100%)'
        setShow(false)
    }


    return (
        <div className='mainNav'>

            <div><img src="m1.png" alt="" /><span><b>E</b>xpert <b>T</b>alk</span></div>

            {!show ? <img onClick={handleNav1} src="ham.png" alt="" /> : <img onClick={handleNav2} src="cross.png" alt="" />}

            <ul ref={ul}>
                <li><a href="#about">About</a></li>
                <li><a href="#service">Service</a></li>
                <li><a href="#testimonial">Testimonial</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </div>
    )
}
