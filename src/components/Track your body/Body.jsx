import React, { useEffect } from 'react'
import BodyStyle from './Body.module.css'
import Aos from 'aos'
import 'aos/dist/aos.css'
const Body = () => {
    useEffect(() => {

    }, [])
    Aos.init({
        duration: 2000
    });
    return (
        <div>
            <div className="body section">
                <div className="container ">
                    <div className="row  justify-content-center align-items-center ">
                        <div data-aos="fade-right" className="col-md-6">
                            <h1 className={BodyStyle.heading}>Track your body <br /> temperature </h1>
                            <p className={`${BodyStyle.paragraph}   text`}>Each measurement results can be synchronized to the <br /> App of the corresponding family member. The trend of <br /> temperature changes at each time, day, month, and <br /> year can be seen at a glance. </p>
                        </div>
                        <div data-aos="zoom-in" className="col-md-6">
                            <img className={BodyStyle.img} src="https://demo2wpopal.b-cdn.net/smartic/wp-content/uploads/2020/10/h8_layer1.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Body
