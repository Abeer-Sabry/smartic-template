import { Link } from "react-router-dom";
import style from "./Products.module.css";

const ProductItem = item => {
  const { _id, category, name, image, price } = item;

  return (
    <>
      <div key={_id} className={`${style.main} col-md-3 `}>
        <h6 className={`${style.heading}  text`}>{category}</h6>
        <Link to={`/products/${_id}`}>
          <img
            className={style.img}
            src={image}
            alt=""
            width={170}
            height={170}
          />
        </Link>
        <Link
          to={`/products/${_id}`}
          style={{
            display: "block",
            textAlign: "center",
            fontSize: ".8rem",
            marginBottom: 10,
          }}
        >
          {name}
        </Link>
        <p>
          ${price} <del className={`${style.DeletedText}  deleted`}>$300</del>{" "}
        </p>
      </div>
    </>
  );
};

export default ProductItem;
