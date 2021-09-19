import React from 'react'
import headStyle from './Header.module.css'
import Aos from 'aos'
import 'aos/dist/aos.css'
const Header = () => {
    Aos.init({
        duration: 2000
    });
    return (
        <div>
            <div className={`${headStyle.headStyle}    section`}>
                <div className="container">
                    <div className="row d-flex align-items-center ">
                        <div className={`${headStyle.info}    col-md-6`}>
                            <h6 data-aos="fade-right" className={`${headStyle.headings}   color mb-2`}>smart thermometer</h6>
                            <h1 className={`${headStyle.mainHead}   mb-4`} data-aos="fade-right" data-aos-delay="300" >Help prevent <br />
                                spreading your <br /> illness</h1>
                            <button data-aos="fade-right" data-aos-delay="500" className={`${headStyle.btn}      btn text-white bg-color `}>shop now</button>
                        </div>
                        <div className="col-md-6  position-relative">
                            <img className={headStyle.mainImge} data-aos="zoom-in" src="https://demo2wpopal.b-cdn.net/smartic/wp-content/uploads/2020/10/h8_layer3.png" alt="" />
                            <img  data-aos="fade-left" data-aos-delay="500" className={`${headStyle.position}   w-100`} src="https://demo2.wpopal.com/smartic/wp-content/uploads/2020/09/08_product_1-500x525.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header
