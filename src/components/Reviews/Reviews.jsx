import React, { useEffect } from 'react'
import reviwStyle from './Reviews.module.css'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import Aos from 'aos'
import 'aos/dist/aos.css'
const Reviews = () => {
    useEffect(() => {

    }, [])
    Aos.init({
        duration: 2000
    });
    return (
        <>
            <div className="container">
                <div className="">
                    <div data-aos="fade-up" className="info text-center mb-5">
                        <h6 className="color">Reviews </h6>
                        <h1>What customers say</h1>
                    </div>
                    <OwlCarousel data-aos-delay="500" className='owl-theme text-center'
                        loop
                        margin={10}
                        nav
                        items="4"
                        dots={4}
                        autoplay="true"
                        navText={false}
                    >

                        <div data-aos="fade-up" className='item '>
                            <p className={reviwStyle.height}>
                                I'm good to go. You won't regret it. Not able to tell you how happy I am with kid smartwatch. I have gotten at least 50 times the value from kid smartwatch. </p>
                            <div className="mb-2">
                                <span className={`${reviwStyle.color}  mr-1`}><i className="fas fa-star"></i></span>
                                <span className={`${reviwStyle.color}  mr-1`}><i className="fas fa-star"></i></span>
                                <span className={`${reviwStyle.color}  mr-1`}><i className="fas fa-star"></i></span>
                                <span className={`${reviwStyle.color}  `}><i className="fas fa-star"></i></span>
                            </div>
                            <h6 className="text">Etienne B., New York</h6>
                        </div>
                        <div data-aos="fade-up" data-aos-delay="300" className='item'>
                            <p className={reviwStyle.height}>
                                Thanks to kid smartwatch, we've just launched our 5th website! I couldn't have asked for more than this. Kid smartwatch is the most valuable business resource we have EVER purchased.  </p>
                            <div className="mb-2">
                                <span className={`${reviwStyle.color}  mr-1`}><i className="fas fa-star"></i></span>
                                <span className={`${reviwStyle.color}  mr-1`}><i className="fas fa-star"></i></span>
                                <span className={`${reviwStyle.color}  mr-1`}><i className="fas fa-star"></i></span>
                                <span className={`${reviwStyle.color}  `}><i className="fas fa-star"></i></span>
                            </div>
                            <h6 className="text">Javier U, New York</h6>
                        </div>
                        <div data-aos="fade-up" data-aos-delay="500" className='item'>
                            <p className={reviwStyle.height}>
                                A great watch with lots of great features. Easy to make phone calls and send text messages. Also, makes it easy to keep track of where your child is with its location settings.  </p>
                            <div className="mb-2">
                                <span className={`${reviwStyle.color}  mr-1`}><i className="fas fa-star"></i></span>
                                <span className={`${reviwStyle.color}  mr-1`}><i className="fas fa-star"></i></span>
                                <span className={`${reviwStyle.color}  mr-1`}><i className="fas fa-star"></i></span>
                                <span className={`${reviwStyle.color}  `}><i className="fas fa-star"></i></span>
                            </div>
                            <h6 className="text">Fox X., New York</h6>
                        </div>
                        <div data-aos="fade-up" data-aos-delay="700" className='item'>
                            <p className={reviwStyle.height}>
                                I have gotten at least 50 times the value from kid smartwatch. I just can't get enough of kid smartwatch. I want to get a T-Shirt with kid smartwatch on it so I can show it off to everyone. </p>
                            <div className="mb-2">
                                <span className={`${reviwStyle.color}  mr-1`}><i className="fas fa-star"></i></span>
                                <span className={`${reviwStyle.color}  mr-1`}><i className="fas fa-star"></i></span>
                                <span className={`${reviwStyle.color}  mr-1`}><i className="fas fa-star"></i></span>
                                <span className={`${reviwStyle.color}  `}><i className="fas fa-star"></i></span>
                            </div>
                            <h6 className="text">Etienne B., New York</h6>
                        </div>
                        <div data-aos="fade-up" data-aos-delay="900" className='item'>
                            <p className={reviwStyle.height}>
                                A great watch with lots of great features. Easy to make phone calls and send text messages. Also, makes it easy to keep track of where your child is with its location settings.  </p>
                            <div className="mb-2">
                                <span className={`${reviwStyle.color}  mr-1`}><i className="fas fa-star"></i></span>
                                <span className={`${reviwStyle.color}  mr-1`}><i className="fas fa-star"></i></span>
                                <span className={`${reviwStyle.color}  mr-1`}><i className="fas fa-star"></i></span>
                                <span className={`${reviwStyle.color}  `}><i className="fas fa-star"></i></span>
                            </div>
                            <h6 className="text">Tracey L., New York</h6>
                        </div>
                    </OwlCarousel>
                </div>
            </div>

        </>
    )
}

export default Reviews
