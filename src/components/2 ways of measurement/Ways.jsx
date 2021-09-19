import React, { useEffect } from 'react'
import wayStyle from './Ways.module.css'
import Aos from 'aos'
import 'aos/dist/aos.css'
const Ways = () => {
    Aos.init({
        duration: 2000
    });
    return (
        <div>
            <div className="ways section">
                <div className="container">
                    <div className="row align-items-center">
                        <div data-aos="zoom-in" className={` position-relative col-md-6`}>
                            <img className={`${wayStyle.img}  `} src="https://demo2wpopal.b-cdn.net/smartic/wp-content/uploads/2020/10/h8_layer1-2.png" alt="" />
                            <img className={`${wayStyle.main}  `} src="https://demo2wpopal.b-cdn.net/smartic/wp-content/uploads/2020/10/h8_layer1-1.png" alt="" />
                        </div>
                        <div data-aos="fade-left" className={`${wayStyle.info}        col-md-5 ml-5`}>
                            <h1 className={wayStyle.heading}>2 ways of <br /> measurement</h1>
                            <p className={`${wayStyle.paragraph}   text`}>Get a clinical-standard reading of your body <br /> temperature in less than 1 second by a slightly <br /> and friendly touch on the forehead. Both 2 ways <br /> measurement are accurate. </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Ways

