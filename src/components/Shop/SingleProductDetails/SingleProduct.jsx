import React, { useEffect } from "react";
import style from "./SingleProduct.module.css";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router";
import SingleProductAction from "../../../Redux/SingleProductDetails/action";
import Loader from "../../Loader/Loader";
import CategoryProducts from "../CategoryProducts/CategoryProducts";
import SimilarProducts from "../SimilarProducts/SimilarProducts";
import ImageGallery from "react-image-gallery";

const SingleProduct = () => {
  const { productId } = useParams();
  const { product, loading } = useSelector(({ product }) => product);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(SingleProductAction(productId));
  }, [dispatch, productId]);

  return (
    <>
      <>
        <div className="row">
          {loading ? (
            <Loader />
          ) : (
            <div className="row col-md-9">
              <div className="col-md-5">
                <ImageGallery items={product?.images ? product?.images : []} />
              </div>
              <div className="col-md-7">
                <button className={style.FirstButton}>
                  {product.category}
                </button>
                <h3 className={style.heading}>{product.name}</h3>
                <div className="d-flex">
                  <p className={`${style.styleparagraph}  `}>{product.brand}</p>
                  <span className={`${style.stars}  stars `}>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                  </span>
                </div>
                <p className={style.paragraph}>{product.description}</p>
                <div className="d-flex align-items-baseline">
                  <h6 className={style.size}>Size</h6>
                  <div>
                    <span className={style.sizeIcons}>S</span>
                    <span className={style.sizeIcons}>M</span>
                    <span className={style.sizeIcons}>L</span>
                    <span className={style.sizeIcons}>XL</span>
                  </div>
                </div>
                <div className="d-flex align-items-baseline">
                  <h6 className={style.qtyHeading}>QTY</h6>
                  <span className={style.Number}>
                    <i className="fas fa-minus"></i>
                  </span>
                  <span className={style.qtyNumber}>0</span>
                  <span className={style.Number}>
                    <i className="fas fa-plus"></i>
                  </span>
                </div>
                <div className="d-flex">
                  <button className={style.CartButton}>Add To Cart</button>
                  <button className={style.favrButton}>
                    <i class="fas fa-heart"></i> Add to Favorite
                  </button>
                </div>
              </div>
            </div>
          )}

          <div className="col-md-3">
            <CategoryProducts />
            <SimilarProducts />
          </div>
        </div>
      </>
    </>
  );
};

export default SingleProduct;
