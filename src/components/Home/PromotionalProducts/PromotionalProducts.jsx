import React from 'react'
import classes from './PromotionalProducts.module.css'

const PromotionalProducts = () => {
    return (
        <div className={classes.promotionalProducts}>
            <div className={classes.promotionalProductsInner}>
                <div className={classes.promotionalProductsImg}>
                    <img src="https://images.samsung.com/is/image/samsung/ru-fhdtv-n5300-ue32n5300auxru-frontblack-171095266?$720_576_PNG$" alt="" />
                </div>

                <div className={classes.promotionalProductsText}>
                    <ul className={classes.promotionalProductsTextList}>
                        <li>
                            <span>02</span>
                            <p>days</p>
                        </li>
                        <li>
                            <span>10</span>
                            <p>hours</p>
                        </li>
                        <li>
                            <span>34</span>
                            <p>MINS</p>
                        </li>
                        <li>
                            <span>59</span>
                            <p>SECS</p>
                        </li>
                    </ul>

                    <div className={classes.promotionalProductsTextTitle}>
                        HOT DEAL THIS WEEK
                    </div>
                    <div className={classes.promotionalProductsTextDescr}>
                        NEW COLLECTION UP TO 50% OFF
                    </div>
                    <div className={classes.promotionalProductsTextBtn}>
                        SHOP NOW
                    </div>
                    
                </div>

                <div className={classes.promotionalProductsImg}>
                    <img src="https://clipart-best.com/img/headphones/headphones-clip-art-3.png" alt="" />
                </div>
            </div>  
        </div>
    )
}

export default PromotionalProducts
