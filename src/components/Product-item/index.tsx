import React, { useState } from "react";
import { ProductTypeList } from "../../types";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";

const ProductItem = ({
  discount,
  images,
  id,
  name,
  price,
  currentPrice,
}: ProductTypeList) => {
  const [toggleFav, setToggleFav] = useState(false);
  return (
    <div className="product-item">
      <div className="product__image">
        <button
          type="button"
          onClick={() => setToggleFav(!toggleFav)}
          className={`btn-heart ${toggleFav ? "btn-heart--active" : ""}`}
        >
          <Icon icon="material-symbols:favorite" />
        </button>

        <Link to={`/product/${id}`}>
          <img src={images ? images[0] : ""} alt="product" />
          {discount && <span className="product__discount">{discount}%</span>}
        </Link>
      </div>

      <div className="product__description">
        <h3>{name}</h3>
        <div
          className={
            "product__price " + (discount ? "product__price--discount" : "")
          }
        >
          <h4>${currentPrice}</h4>

          {/* {discount &&  
          <span>${ price }</span>
        } */}
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
