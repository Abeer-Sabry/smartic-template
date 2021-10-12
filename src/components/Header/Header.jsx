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
                    <div className="row p-0 m-0 d-flex align-items-center justify-content-between ">
                        <div className={`${headStyle.info} m-0 p-0   col-md-6`}>
                            <h6 data-aos="fade-right" className={`${headStyle.headings}   color mb-2`}>Smart Headphones</h6>
                            <h1 className={`${headStyle.mainHead}   mb-4`} data-aos="fade-right" data-aos-delay="300" >Enjoy Now <br />
                                listening to your <br /> Music</h1>
                            <button data-aos="fade-right" data-aos-delay="500" className={`${headStyle.btn}      btn text-white bg-color `}>shop now</button>
                        </div>
                        <div className="col-md-6 m-0 p-0 position-relative ">
                            <img className={`${headStyle.mainImge}    `} data-aos="zoom-in" src="https://cf.shopee.co.th/file/2fd995e8836e009b2801b625248bf2f3" alt="" />
                            {/* <img className={headStyle.mainImge} data-aos="zoom-in" src="https://news-cdn.softpedia.com/images/news2/Toshiba-s-4K-Laptop-Arrives-April-22-with-1-500-1-087-Price-Tag-437769-3.jpg" alt="" /> */}
                            {/* <img className={headStyle.mainImge} data-aos="zoom-in" src="https://demo2wpopal.b-cdn.net/smartic/wp-content/uploads/2020/10/h8_layer3.png" alt="" /> */}
                            {/* <img  data-aos="fade-left" data-aos-delay="500" className={`${headStyle.position}   w-100`} src="https://demo2.wpopal.com/smartic/wp-content/uploads/2020/09/08_product_1-500x525.png" alt="" /> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header
