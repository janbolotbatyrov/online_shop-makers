import React, { useContext, useEffect } from "react";
import { productContext } from "../../context/ProductContext";
import classes from "./ProductsList.module.css";

const ProductsList = (props) => {
  const { products, getProductsData, deleteProduct, editProduct } =
    useContext(productContext);

  useEffect(() => {
    getProductsData()
  }, []);

  return (
    <div className={classes.productsList}>
      <div className="container">
        <div className={classes.productsListInner}>
          <div className={classes.productsListFilter}>
            <div className={classes.productsListFilterCategories}>
              <h3 for="customRange1" className="form-label">
                Categories
              </h3>{" "}
              <br />
              <div className="d-flex">
                <div className="me-5">
                  <p>Laptops</p>
                  <p>Smartphones</p>
                  <p>Cameras</p>
                </div>
                <div>
                  <p>Accessories</p>
                  <p>TV</p>
                </div>
              </div>
            </div>

            <div className={classes.productsListFilterPrice}>
              <h3 for="customRange1" className="form-label">
                Price
              </h3>{" "}
              <br />
              <input type="range" className="form-range" id="customRange1" />
              <input type="number" />
              <input type="number" />
            </div>
          </div>
          <ul className={classes.newProductList}>
            {products.map((item) => (
                <li key={item.id} onClick={() => props.history.push(`/detail/${item.id}`)}>
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
                    <div className="d-flex justify-content-evenly align-items-center mt-3">
                      <i
                        className="far fa-trash-alt fs-5"
                        onClick={() => deleteProduct(item.id)}
                      ></i>
                      <div className={classes.newProductFavorite}>
                        <i className="far fa-heart"></i>
                      </div>
                      <i
                        className="far fa-edit fs-5"
                        onClick={() => {
                          editProduct(item.id, props.history);
                        }}
                      ></i>
                    </div>
                  </div>
                  <div className={classes.newProductAddToCart}>
                    <button className="add-to-cart-btn">
                      <i className="fa fa-shopping-cart"></i> add to cart
                    </button>
                  </div>
                </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProductsList;
