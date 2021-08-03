import React from 'react'
import NewProductItem from './NewProductItem/NewProductItem'
import classes from './NewProducts.module.css'

const NewProducts = () => {
    return (
        <div className={classes.newProducts}>
            <div className="container-xxl">
                <div className={classes.newProductsInner}>
                    <div className={classes.newProductsTop}>
                        <h3 className={classes.newProductsTitle}>New Products</h3>
                        <ul className={classes.newProductsList}>
                            <li class="active"><a data-toggle="tab" class={classes.active} href="#tab1">Laptops</a></li>
                            <li><a data-toggle="tab" href="#tab1">Smartphones</a></li>
                            <li><a data-toggle="tab" href="#tab1">Cameras</a></li>
                            <li><a data-toggle="tab" href="#tab1">Accessories</a></li>
                        </ul>
                    </div>
                    <div className={classes.newProductsMain}>
                        <NewProductItem />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NewProducts
