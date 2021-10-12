import React from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'
import style from "./Easy.module.css"
const Easy = () => {
    Aos.init({
        duration: 2000
    });
    return (
        <div>
            <div className="easy section">
                <div className="container">
                    <div data-aos="fade-up" className="row align-items-center">
                        <div className={`${style.info}   col-md-6`}>
                            <h1 className={style.heading}>Easy to use</h1>
                            <p className={`${style.paragraph}  text`}>The full chamfer probe with the extra soften process <br /> offers a most comfortable contact with the babies. </p>
                            <div className='d-flex align-items-baseline'>
                                <span className="text-success"><i class="fas fa-check-circle"></i></span>
                                <h6 className="ml-3">Automatic synchronization</h6>
                            </div>
                            <div className='d-flex align-items-baseline'>
                                <span className="text-success"><i class="fas fa-check-circle"></i></span>
                                <h6 className="ml-3">Support more than 500 users</h6>
                            </div>
                            <div className="d-flex align-items-baseline">
                                <span className="text-success"><i class="fas fa-check-circle"></i></span>
                                <h6 className="ml-3">Compact and portable</h6>
                            </div>
                            <div className="d-flex align-items-baseline">
                                <span className="text-success"><i class="fas fa-check-circle"></i></span>
                                <h6 className="ml-3">No contact required</h6>
                            </div>
                            <div className="d-flex align-items-baseline">
                                <span className="text-success"><i class="fas fa-check-circle"></i></span>
                                <h6 className="ml-3">Know when it's time to take action</h6>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <img className={`${style.img}  w-100`} data-aos="zoom-in" src="https://news-cdn.softpedia.com/images/news2/Toshiba-s-4K-Laptop-Arrives-April-22-with-1-500-1-087-Price-Tag-437769-3.jpg" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Easy
