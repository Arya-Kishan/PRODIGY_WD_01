import React from 'react'
import './Third.scss'

const arr = ["Email Marketing", "Monthly SEO", "Search Ranking", "Search"]
export default function Third() {

    return (
        <div className='mainThird' id='service'>

            <div>
                <h3>Our Services</h3>
                <h1>What we Do</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia ullam, corporis, error odio voluptate cupiditate similique blanditiis exercitationem placeat at voluptates laborum! Molestias natus eum tempore quo doloribus facilis provident, pariatur veniam repellat omnis quisquam. Vero nam quae commodi doloribus.?</p>
            </div>



            <div>
                {
                    arr.map((e, i) => (
                        <div className="box" key={i}>
                            <img className='speaker' src={`s3p${i + 1}.png`} alt="" srcSet="" />
                            <h3>{e}</h3>
                        </div>
                    ))
                }
            </div>



            <div>
                <div>
                    <h1>Email Marketing</h1>
                    <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam inventore tempore architecto voluptatum labore illo in voluptas? Similique suscipit voluptatum, consequuntur eum harum hic atque incidunt labore, quis illum nobis.</span>
                    <div>
                        <p><img src="c1.png" alt="" />Make more than 1000 Lead</p>
                        <p><img src="c1.png" alt="" />Random Thoughts comes up</p>
                        <p><img src="c1.png" alt="" />Why water is transparent</p>
                        <p><img src="c1.png" alt="" />Make more than 1000 babies</p>
                        <p><img src="c1.png" alt="" />Sun is hotter than GF</p>
                    </div>
                    <button>View More</button>
                </div>
                <div>
                    <img src="s4p2.png" alt="" />
                </div>

                <div className="circle"></div>

            </div>


            <div className="randomCircle1 circle"></div>
            <div className="randomCircle2 circle"></div>
        </div>
    )
}
