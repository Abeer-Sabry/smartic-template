import React, { useEffect } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'
import style from './Batteries.module.css'
const Batteries = () => {
    useEffect(() => {

    }, [])
    Aos.init({
        duration: 2000
    });
    return (
        <div>
            <div className="batteries section">
                <div className="container">
                    <div className="row align-items-center justify-content-center ">
                        <div className="col-md-6">
                            <img className={style.img} data-aos="zoom-in" src="https://demo2wpopal.b-cdn.net/smartic/wp-content/uploads/2020/10/h8_layer3.png" alt="" />
                        </div>
                        <div data-aos="fade-up" className="col-md-6">
                            <h1 className={style.heading}>Batteries last <br /> up to 2 years</h1>
                            <p className={`${style.paragraph}  text`}>
                                Now, a fast, simple, no-contact gesture yields <br /> medical-grade results right on the device and <br /> provides an automatic sync with the free Thermo <br /> app.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Batteries
