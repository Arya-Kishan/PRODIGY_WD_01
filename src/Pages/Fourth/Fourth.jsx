import React, { useEffect, useRef } from 'react'
import './Fourth.scss'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'

export default function Fourth() {

    const parent = useRef(null)
    gsap.registerPlugin(ScrollTrigger)

    useEffect(() => {

        const ctx = gsap.context(() => {

            gsap.to(".circle3", {
                rotate: "720deg",
                scrollTrigger: {
                    trigger: ".fourth",
                    // markers: true,
                    start: "0% 100%",
                    end: "100% 0%",
                    scrub: 1,
                }
            })
        }, parent)

        return () => ctx.revert();

    }, [])


    return (
        <div className='mainFourth' ref={parent} id='testimonial'>

            <h1>Testominials</h1>

            <section className='fourth'>

                <div className='fourth-left'>
                    <h1>Love From Clients</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit minima aspernatur assumenda fugit, soluta veniam alias exercitationem voluptate doloribus, adipisci vitae nostrum, ullam reprehenderit?</p>
                    <div className='feedback'>
                        <div className="profile">
                            <img src="s5p2.png" alt="" />
                        </div>
                        <p className="name">Arya</p>
                        <p className="stars">******</p>
                        <p className="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet unde laborum repudiandae harum id magni reprehenderit voluptates, quaerat nostrum officiis ratione doloremque vero adipisci, facilis rem tempore a dolorem vitae.</p>
                    </div>
                    <div>0  0  0</div>

                </div>

                <div className='fourth-right'>
                    <img src="s5p4.png" alt="" />
                    <div className="circle1"></div>
                    <div className="circle2"></div>
                    <div className="circle3"></div>
                </div>

            </section>
            <div className="randomCircle1 circle"></div>

        </div>
    )
}
