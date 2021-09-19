import React from 'react'
import FeaturedStyle from './Featured.module.css'
import Aos from 'aos'
import 'aos/dist/aos.css'
const Featured = () => {
    Aos.init({
        duration: 2000
    });
    return (
        <div>
            <div className=" position-relative featured section text-center">
                <div className="container-fluids">
                    <div className={`${FeaturedStyle.borderLeft}   `}></div>
                    <h3 className="mb-5">As featured in</h3>
                    <div className={`${FeaturedStyle.borderRight}   `}></div>
                    <div className="row justify-content-center">
                        <div data-aos="fade-up" className="col-md-2">
                            <img className={`${FeaturedStyle.img}   `} src="https://demo2wpopal.b-cdn.net/smartic/wp-content/uploads/2020/10/brand-1.png" alt="" />
                        </div>
                        <div data-aos="fade-up" data-aos-delay="300" className="col-md-2">
                            <img className={`${FeaturedStyle.img}   `} src="https://demo2wpopal.b-cdn.net/smartic/wp-content/uploads/2020/10/brand-2.png" alt="" />
                        </div>
                        <div data-aos="fade-up" data-aos-delay="500" className="col-md-2">
                            <img className={`${FeaturedStyle.img}   `} src="https://demo2wpopal.b-cdn.net/smartic/wp-content/uploads/2020/10/brand-3.png" alt="" />
                        </div>
                        <div data-aos="fade-up" data-aos-delay="700" className="col-md-2">
                            <img className={`${FeaturedStyle.img}   `} src="https://demo2wpopal.b-cdn.net/smartic/wp-content/uploads/2020/10/brand-4.png" alt="" />
                        </div>
                        <div data-aos="fade-up" data-aos-delay="900" className="col-md-2">
                            <img className={`${FeaturedStyle.img}   `} src="https://demo2wpopal.b-cdn.net/smartic/wp-content/uploads/2020/10/brand-5.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Featured
