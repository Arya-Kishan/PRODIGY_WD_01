import React from 'react'
import './Footer.scss'

export default function Footer() {
    return (
        <div className='mainFooter' id='contact'>

            <div>
                <div className='footerHead'><img src="m1.png" alt="" /><h2>Expert Talk</h2></div>
                <div>Ready to Boost Website ?</div>
                <div><button>Order Now</button></div>
            </div>

            <div>

                <div className='address'>
                    <h2>Address</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, tempora. Porro, quo.</p>
                    <p>google Maps</p>
                </div>

                <div className='contact'>
                    <h2>Contact</h2>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus, voluptatibus.</p>
                    <p>Call Now</p>
                </div>

                <div className='faq'>
                    <h2>FAQ</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime error dolor repellat.</p>
                    <p>More...</p>
                </div>

                <div className='news'>
                    <h2>News Letter</h2>
                    <p><input type="text" /><img src="m2.png" alt="" /></p>
                    <span>Subscribe</span>
                </div>

            </div>

            <div>
                <p>Copyright 2023 Arya Kishan , All rights reserved</p>
            </div>

        </div>
    )
}
