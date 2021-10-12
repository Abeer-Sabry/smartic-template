import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import addToCartAction from "../../../Redux/Cart/action";
import fetchDataAction from "../../../Redux/FetchProducts/action";
import Loader from "../../Loader/Loader";
import ProductItem from "../ProductItem/ProductItem";
import style from "./ProductsListView.module.css";
const ProductsListView = () => {
    const { products, loading } = useSelector(({ products }) => products);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchDataAction());
    }, [dispatch]);
    return (
        <>
            {loading ? (
                <Loader />
            ) : (
                products.map(({ name, category, _id, image, price }) => (
                    <div key={_id}>
                        <div className="d-flex align-items-center">
                            <div className="col-md-5">
                                <img className={style.img} src={image} alt="" />
                            </div>
                            <div className="col-md-7">
                                <h6 className={`${style.heading}  text`}>{category}</h6>
                                <p className={style.paragraph}>{name}</p>
                                <p>
                                    ${price}{" "}
                                    <del className={`${style.DeletedText}  deleted`}>$300</del>{" "}
                                </p>
                                <button
                                    onClick={() =>
                                        dispatch(addToCartAction({ name, category, _id, image, price }))
                                    }
                                    className={`${style.button}  mb-5 bg-color text-white px-3 py-1`}
                                >
                                    Add To Cart
                                </button>
                            </div>
                        </div>


                    </div>
                ))
            )}
        </>
    );
};

export default ProductsListView;
