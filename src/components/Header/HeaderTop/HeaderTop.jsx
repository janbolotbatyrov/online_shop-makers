import React from 'react'
import classes from './HeaderTop.module.css'

const HeaderTop = () => {
    return (
        <div className={classes.headerTop}>
            <div className="container-xxl">
                <div className={classes.headerTopInner}>
                    <div className={classes.headerTopContacts}>
                        <div className={classes.contactPhone}>
                            <i className="fas fa-phone-alt"></i>
                            +996-999-00-00-00
                        </div>
                        <div className={classes.contactEmail}>
                            <i className="far fa-envelope"></i>
                            email@email.com
                        </div>
                        <div className={classes.contactLocation}>
                            <i className="fas fa-map-marker-alt"></i>
                            Kyrgyzstan, Bishkek, Logvinenko 12
                        </div>
                    </div>
                    <div className={classes.headerTopAccounts}>
                        <div className={classes.accountBalance}>
                            <i className="fas fa-dollar-sign"></i>
                            USD
                        </div>
                        <div className={classes.accountProfile}>
                            <i className="far fa-user"></i>
                            My Account
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeaderTop
