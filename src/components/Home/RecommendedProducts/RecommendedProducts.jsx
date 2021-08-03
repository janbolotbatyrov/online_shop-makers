import React from 'react'
import classes from './RecommendedProducts.module.css'

const RecommendedProducts = () => {
    return (
        <div className={classes.recommendedProducts}>
            <div className="container">
                <div className={classes.recommendedProductsInner}>
                        <div className={classes.recommendedProductsShop}>
                            <div className={classes.shop}>
                                <div className={classes.shopImg}>
                                    <img src="https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fGZvciUyMHBjfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80" alt="" />
                                </div>
                                <div className={classes.shopBody}>
                                    <h3>Laptop<br/>Collection</h3>
                                    <a href="#"  className={classes.ctaBtn}>Shop now <i className="fa fa-arrow-circle-right"></i></a>
                                </div>
                            </div>
                        </div>

                        <div className={classes.recommendedProductsShop}>
                            <div className={classes.shop}>
                                <div className={classes.shopImg}>
                                    <img src="https://images.pexels.com/photos/610945/pexels-photo-610945.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" />
                                </div>
                                <div className={classes.shopBody}>
                                    <h3>Accessories<br/>Collection</h3>
                                    <a href="#"  className={classes.ctaBtn}>Shop now <i className="fa fa-arrow-circle-right"></i></a>
                                </div>
                            </div>
                        </div>

                        <div className={classes.recommendedProductsShop}>
                            <div className={classes.shop}>
                                <div className={classes.shopImg}>
                                    <img src="https://images.pexels.com/photos/593324/pexels-photo-593324.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt=""/>
                                </div>
                                <div className={classes.shopBody}>
                                    <h3>Cameras<br/>Collection</h3>
                                    <a href="#" className={classes.ctaBtn}>Shop now <i className="fa fa-arrow-circle-right"></i></a>
                                </div>
                            </div>
                        </div>
                </div>
            </div>
        </div>
    )
}

export default RecommendedProducts
