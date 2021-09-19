import React from 'react'
import buyStyle from './Buy.module.css'
const Buy = () => {
    return (
        <div>
            <div className={`${buyStyle.bg}   `}>
                <div className={`${buyStyle.style}    `}>
                    <div className="">
                        <h6 className={`${buyStyle.color}  color`}>Buy Now</h6>
                        <div className="d-flex ">
                            <h1 className={`${buyStyle.heading}    mr-4`}>Enormous Wool Bench</h1>
                            <span className="color mt-3 ">$724,47</span>
                        </div>
                        <p className={`${buyStyle.stock}    text-success`}>In stock</p>
                        <input className={`${buyStyle.input}    d-block mb-3 `} type="number" />
                        <button className={`${buyStyle.textcolor}   bg-color mb-3`}>Add to cart</button>
                        <div className={`${buyStyle.info}   d-flex  align-items-baseline`}>
                            <span ><i className="fas fa-truck-moving"></i></span>
                            <p className="ml-2">Free shipping from $150</p>
                        </div>
                        <div className={`${buyStyle.info}   d-flex  align-items-baseline`}>
                            <span ><i className="fas fa-undo-alt"></i></span>
                            <p className="ml-2">30-day returns</p>
                        </div>
                        <div className={`${buyStyle.info}   d-flex  align-items-baseline`}>
                            <span ><i className="fas fa-medal"></i></span>
                            <p className="ml-2">2-year warranty</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Buy
