import React from 'react'
import ThermoStyle from './Thermometer.module.css'
import Aos from 'aos'
import 'aos/dist/aos.css'
const Thermometer = () => {
    Aos.init({
        duration: 2000
    });
    return (
        <div>
            <div className={`${ThermoStyle.bg}   Thermometer text-center section`}>
                <div className="container-fluidsr">
                    <div className="mb-5">
                        <p data-aos="fade-up" className={`${ThermoStyle.smallHead}    color`}>Introducing The Best Devices. </p>
                        <h1 data-aos="fade-up" data-aos-delay="200" className={`${ThermoStyle.heading}    mb-4`}>Easier way to Check <br /> Quality</h1>
                        <p className={ThermoStyle.paragraph} data-aos="fade-up" data-aos-delay="200">Thermo is a game changer. Now, a fast, simple, no-contact gesture yields medical-grade <br /> results right on the device and provides an automatic sync with the free <br /> Thermo app, available for iOS and Android. </p>
                    </div>
                    <div className="row col-md-12 justify-content-center">
                        <img data-aos="fade-right" data-aos-delay="600" className={`${ThermoStyle.img}   col-md-4 w-100`} src="https://cdn.unifyhealthlabs.com/wp-content/uploads/2019/12/manlisteningtomusic.jpg" alt="" />
                        {/* <img data-aos="fade-right" data-aos-delay="600" className={`${ThermoStyle.img}   col-md-4 w-100`} src="https://demo2wpopal.b-cdn.net/smartic/wp-content/uploads/2020/10/h8_img-1.jpg" alt="" /> */}
                        <img data-aos="fade-left" data-aos-delay="600" className={`${ThermoStyle.img}   col-md-4 w-100`} src="https://us.123rf.com/450wm/joykid/joykid1706/joykid170600046/79947736-asian-girl-working-at-a-coffee-shop-sitting-with-mobile-phone-and-laptop-manager-doing-job-at-loft-o.jpg?ver=6" alt="" />
                        {/* <img data-aos="fade-left" data-aos-delay="600" className={`${ThermoStyle.img}   col-md-4 w-100`} src="https://demo2wpopal.b-cdn.net/smartic/wp-content/uploads/2020/10/h8_img-2.jpg" alt="" /> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Thermometer
