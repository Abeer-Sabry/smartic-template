import React from 'react'
import techStyle from './Technology.module.css'
import Aos from 'aos'
import 'aos/dist/aos.css'
const Technology = () => {
    Aos.init({
        duration: 2000
    });
    return (
        <div>
            <div className={`${techStyle.background}    Tech text-center section`}>
                <div className="container">
                    <div className="mb-5">
                        <p className={`${techStyle.paragraph}  color`}>Features</p>
                        <h1 className={techStyle.heading}>The coolest technology</h1>
                    </div>
                    <div className={`${techStyle.rows}   row  d-flex `}>
                        <div data-aos="fade-right" className={`${techStyle.ground}    col-md-3`}>
                            <span className={`${techStyle.green}    `}><i className="fas fa-bolt"></i></span>
                            <h5>Power-on in second</h5>
                            <p className="text">One tap to wake up the device in 1 second</p>
                        </div>
                        <div data-aos="fade-up" className={`${techStyle.ground}    col-md-3`}>
                            <span className={`${techStyle.blue}`}><i class="fas fa-temperature-low"></i></span>
                            <h5>Highly accurate</h5>
                            <p className="text">16 infrared sensors take over 4,000 measurements—a revolutionary advancement</p>
                        </div>
                        <div data-aos="fade-up" className={`${techStyle.ground}    col-md-3`}>
                            <span className={`${techStyle.red}`}><i class="fas fa-thermometer"></i></span>
                            <h5>Power-on in second</h5>
                            <p className="text">One tap to wake up the device in 1 second</p>
                        </div>
                        <div data-aos="fade-left" className={`${techStyle.ground}    col-md-3`}>
                            <span className={`${techStyle.dark}`}><i class="fas fa-power-off"></i></span>
                            <h5>Power-on in second</h5>
                            <p className="text">One tap to wake up the device in 1 second</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Technology
