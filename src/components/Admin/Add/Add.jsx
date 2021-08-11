import React, { useContext, useState } from 'react';
import { Link, useHistory, useLocation, useParams } from 'react-router-dom';
import { productContext } from '../../../context/ProductContext';
import classes from './Add.module.css'


const Add = () => {

    const [titleInpVal, setTitleInpVal] = useState('')
    const [imageInpVal, setImageInpVal] = useState('')
    const [typeInpVal, setTypeInpVal] = useState('')
    const [priceInpVal, setPriceInpVal] = useState('')
    const [descriptionInpVal, setDescriptionInpVal] = useState('')

    const {addProduct} = useContext(productContext)

    function handleClick(){
        let newObj = {
            productTitle: titleInpVal,
            productImage: imageInpVal,
            productType: typeInpVal,
            productPrice: priceInpVal,
            productDescription: descriptionInpVal 
        }
        addProduct(newObj)
    }
  
    // let history = useHistory()
    // console.log(history);
    // let location = useLocation()
    // console.log(location);
    
    
    return (
       <div className={classes.add}>
            <div className="container-xxl">
                <div className={classes.addInner}>
                    <h2>Add product</h2>
                    <div className={classes.addProduct}>
                        <div className={classes.addProductImg}>
                            <img src={imageInpVal ? imageInpVal : "https://www.seekpng.com/png/full/774-7744281_samsung-electronics-samsung-electronic-product-png.png"}  alt="" />
                        </div>
                        <div className={classes.addProductInfo}>
                            <input type="text" onChange={(e) => setTitleInpVal(e.target.value)} value={titleInpVal} placeholder='Title' /><br />
                            <input type="text" onChange={(e) => setImageInpVal(e.target.value)} value={imageInpVal} placeholder='Image' /> <br />
                            <input type="text" onChange={(e) => setTypeInpVal(e.target.value)} value={typeInpVal} placeholder='Type' /> <br />
                            <input type="text" onChange={(e) => setPriceInpVal(e.target.value)} value={priceInpVal} placeholder='Price' /> <br />
                            <input type="text" onChange={(e) => setDescriptionInpVal(e.target.value)} value={descriptionInpVal} placeholder='Description' /> <br />
                            <Link to='/products'><div className='btn btn-danger ps-5 pe-5' onClick={handleClick}>Add</div></Link>
                        </div>
                    </div>
                </div>
           </div>
       </div>
    );
};

export default Add;