import React, { useEffect, useRef } from 'react'
import './Second.scss'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'

export default function Second() {

    const parent = useRef(null)
    gsap.registerPlugin(ScrollTrigger)

    useEffect(() => {

        const ctx = gsap.context(() => {

            gsap.from(".secondDiv h3,.secondDiv h1,.secondDiv button",{
                x:-100,
                opacity:0,
                duration:.8,
            })
            gsap.from(".secondImg",{
                x:100,
                opacity:0,
                duration:.8,
            })

            gsap.to(".secondImg", {
                scale:1.2,
                scrollTrigger: {
                    trigger: ".secondImg",
                    // markers: true,
                    start: "0% 0%",
                    end: "100% 2%",
                    scrub: 1,
                }
            })


        }, parent)

        return () => ctx.revert();

    }, [])


    return (
        <div className='mainSecond' id='about' ref={parent}>

            <div className='secondDiv'>
                <h3>Expert Talk</h3>
                <h1>We Are the Best Marketing agency in the City. </h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint aspernatur sapiente recusandae doloremque, dolorum magnam eius ad praesentium fugit placeat!</p>
                <button>See More</button>
            </div>

            <img className='secondImg' src="s2p3.png" alt="" srcSet="" />

            <div className="circle1 circle"></div>
            <div className="circle2 circle"></div>

        </div>
    )
}
