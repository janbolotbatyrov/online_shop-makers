import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { productContext } from "../../context/ProductContext";
import classes from "./ProductDetail.module.css";

const ProductDetail = () => {
  const { id } = useParams();
  const { detail, getDetail } = useContext(productContext);
  useEffect(() => {
    getDetail(id);
  }, [id]);
  return (
    <div className={classes.productDetail}>
      <div className="container-xxl">
        <div className={classes.productDetailInner}>
          {/* {detail ? (
                            'a'
                        ): (<h1>Loading...</h1> )
                    } */}
          <div className={classes.productDetailImg}>
            <img src={detail.productImage} alt="" />
          </div>
          <div className={classes.productDetailInfo}>
            <h2>{detail.productTitle}</h2>
            <div className={classes.productDetailPrice}> {detail.productPrice} </div>
            <div className={classes.productDetailDescription}> {detail.productDescription} </div>
            <div className={classes.productDetailSelect}>
              <div className={classes.productDetailSelectSize}>
                Size
                <select name="size" id="">
                  <option value="">X</option>
                  <option value="">Y</option>
                </select>
              </div>
              <div className={classes.productDetailSelectColor}>
                Color
                <select name="color" id="">
                  <option value="">Silver</option>
                  <option value="">Blue</option>
                  <option value="">White</option>
                  <option value="">Black</option>
                </select>
              </div>
            </div>
            <div className={classes.productDetailSelect}>
                <div className={classes.productDetailSelectCount}>
                    QTY 
                    <input type="number" />
                </div>
                <div className={classes.productDetailAddToCart}>
                    Add to Cart
                </div>
            </div>
            <div className={classes.productDetailType}><span>Category:</span> {detail.productType}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
