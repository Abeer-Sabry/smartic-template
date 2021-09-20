import { useState } from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import fetchDataAction from "../../../Redux/FetchProducts/action";
import Loader from "../../Loader/Loader";
import ProductItem from "../../ProductItem/ProductItem";

const Products = () => {
  const [modalShow, setModalShow] = useState(false);

  const { products, loading } = useSelector(({ products }) => products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchDataAction());
  }, [dispatch]);
  return (
    <>
      <div className="row">
        {loading ? (
          <Loader />
        ) : (
          products.map(item => (
            <ProductItem
              id={item._id}
              {...item}
              setModalShow={setModalShow}
              modalShow={modalShow}
            />
          ))
        )}
      </div>
    </>
  );
};

export default Products;
