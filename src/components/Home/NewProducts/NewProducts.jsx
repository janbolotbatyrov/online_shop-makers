import React, { useContext, useEffect } from "react";
import { productContext } from "../../../context/ProductContext";
import classes from "./NewProducts.module.css";

const NewProducts = () => {
  const { products, getProductsData } = useContext(productContext);

  useEffect(() => {
    getProductsData();
  }, []);
  let count = 1
  function counterProducts(){
    count++
  }
  return (
    <div className={classes.productsList}>
      <div className="container">
        <div className={classes.productsListInner}>
          <ul className={classes.newProductList}>
            {products.map((item) => (
              <li key={item.id}>
                <div className={classes.newProductImg}>
                  <img src={item.productImage} alt="" />
                </div>
                <div className={classes.newProductBody}>
                  <div className={classes.newProductCategory}>
                    {item.productType}
                  </div>
                  <div className={classes.newProductTitle}>
                    {item.productTitle}
                  </div>
                  <div className={classes.newProductPrice}>
                    {item.productPrice}
                  </div>
                  <div className={classes.newProductDescr}>
                    {item.productDescription}
                  </div>
                  <div className={classes.newProductStars}>
                    <hr />
                  </div>
                  <div className={classes.newProductFavorite}>
                    <i className="far fa-heart"></i>
                  </div>
                </div>
                <div className={classes.newProductAddToCart}>
                  <button className="add-to-cart-btn">
                    <i className="fa fa-shopping-cart"></i> add to cart
                  </button>
                </div>
                {counterProducts()}
              </li>
  ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NewProducts;
