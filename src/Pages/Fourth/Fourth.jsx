import React, { useEffect, useRef } from 'react'
import './Fourth.scss'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

const arr1 = [{ name: "arya", star: "***", desc: "It was normal" }, { name: "Itachi", star: "*****", desc: "Mangekyo Sharingan" }, { name: "Madara", star: "*", desc: "Wake To Reality" },{ name: "Vishwamohini", star: "*****", desc: "Something was missing" },{ name: "Naruto", star: "***", desc: "Datte Baayo" }]
import { Autoplay, Pagination } from 'swiper/modules';

export default function Fourth() {

    const parent = useRef(null)
    gsap.registerPlugin(ScrollTrigger)

    useEffect(() => {

        const ctx = gsap.context(() => {

            gsap.to(".circle3", {
                rotate: "1800deg",
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
                    <Swiper
                        spaceBetween={30}
                        centeredSlides={true}
                        autoplay={{
                            delay: 1500,
                            disableOnInteraction: false,
                        }}
                        pagination={{
                            clickable: true,
                        }}
                        modules={[Autoplay, Pagination]}
                        className="mySwiper"
                    >
                        {
                            arr1.map((e, i) => (
                                <SwiperSlide key={i}>
                                    <img src={`s5p${i + 1}.png`} alt="" />
                                    <span>{e.name}</span>
                                    <span>{e.star}</span>
                                    <span>{e.desc}</span>
                                </SwiperSlide>
                            ))
                        }
                    </Swiper>
                </div>

                <div className='fourth-right'>
                    <img src="s5p7.png" alt="" />
                    <div className="circle1"></div>
                    <div className="circle2"></div>
                    <div className="circle3"></div>
                </div>

            </section>

            <div className="randomCircle1 circle"></div>


        </div>
    )
}
