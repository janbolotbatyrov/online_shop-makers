import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { productContext } from "../../context/ProductContext";
import classes from "./ProductsList.module.css";

const ProductsList = (props) => {
  const { products, getProductsData, deleteProduct, editProduct } =
    useContext(productContext);
  const [isAdmin, setIsAdmin] = useState(false);
  const checkAdmin = async () => {
    let { data } = await axios("http://localhost:8000/admin");
    let admin = data[0].isAdmin;
    setIsAdmin(admin);
  };
  
  useEffect(() => {
    getProductsData();
    checkAdmin()
  }, []);

  const addToCard = (e) =>{
      console.log('addtocart');
  }

  return (
    <div className={classes.productsList}>
      <div className="container">
        <div className={classes.productsListInner}>
          <div className={classes.productsListFilter}>
            <div className={classes.productsListFilterPrice}>
              <h3 for="customRange1" className="form-label">
                Price
              </h3>
              <input type="range" className="form-range" id="customRange1" />
              <div className="d-flex justify-content-center">
                <input className={classes.filterPriceInp} type="number" />
                <input className={classes.filterPriceInp} type="number" />
              </div>
            </div>
          </div>
          <ul className={classes.newProductList}>
            {products.map((item) => (
              <li
                key={item.id}
                onFocus={() => props.history.push(`/detail/${item.id}`)}
              >
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
                    {isAdmin ? (
                      <i
                        className="far fa-trash-alt fs-5"
                        onClick={() => deleteProduct(item.id)}
                      ></i>
                    ) : null}

                    <div className={classes.newProductFavorite}>
                      <i className="far fa-heart"></i>
                    </div>
                    {isAdmin ? (
                      <i
                        className="far fa-edit fs-5"
                        onClick={() => {
                          editProduct(item.id, props.history);
                        }}
                      ></i>
                    ) : null}
                  </div>
                </div>
                
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className={classes.newProductAddToCart}>
                  <button className="add-to-cart-btn">
                    <i className="fa fa-shopping-cart" onClick={() => console.log('1')}></i> add to cart
                  </button>
                </div>
    </div>
  );
};

export default ProductsList;
