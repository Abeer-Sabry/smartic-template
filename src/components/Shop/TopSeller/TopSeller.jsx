import React, { useEffect } from "react";
import "./TopSeller.module.css";
import { useDispatch, useSelector } from "react-redux";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import fetchDataAction from "../../../Redux/FetchProducts/action";
import { Link } from "react-router-dom";
import Loader from "../../Loader/Loader";
import style from "./TopSeller.module.css";

const TopSeller = () => {
    const { products, loading } = useSelector(({ products }) => products);
    const dispatch = useDispatch();

    const items = products?.map(({ _id, category, name, image, price }) => (
        <div key={_id} className={`${style.main}   `}>
            <h6 className={`${style.heading}  color`}>{category}</h6>
            <Link to={`/products/${_id}`}>
                <p className={style.paragraph}>{name}</p>
                <img className={style.img} src={image} alt="" />
            </Link>
            <p className="">
                ${price} <del className={`${style.DeletedText}  deleted`}>$300</del>{" "}
            </p>
        </div>
    ));
    useEffect(() => {
        dispatch(fetchDataAction());
    }, [dispatch]);
    // if (loading) {
    //     return <h1>Loading</h1>
    // }
    const responsive = {
        0: { items: 5 },
    };

    return (
        <>
            {loading ? (
                <Loader />
            ) : (
                <>
                    <h2 className="mb-5 color">Top Seller Products</h2>
                    <AliceCarousel
                        mouseTracking
                        items={items}
                        responsive={responsive}
                        animationType="fadeout"
                        // mouseTracking={false}
                        disableDotsControls
                        autoPlay
                        infinite
                        animationDuration={1200}
                    />
                    {/* <div className="alice-carousel__next-btn">
                        {" "}
                        <span className="alice-carousel___next-btn-item">

                            <i className="fas fa-long-arrow-alt-left"></i>
                        </span>
                    </div>
                    <div className="alice-carousel__prev-btn">
                        <div className="alice-carousel__prev-btn-wrapper">
                            <span className="alice-carousel__prev-btn-item">
                                <i className="fas fa-long-arrow-alt-right"></i>
                            </span>
                        </div>
                    </div> */}
                </>
            )}
        </>
    );
};

export default TopSeller;
