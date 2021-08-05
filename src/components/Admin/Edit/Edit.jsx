import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { productContext } from "../../../context/ProductContext";

const Edit = (props) => {
console.log();
    const {productToEdit, saveProduct} = useContext(productContext)
    const [newProductItem, setNewProductItem] = useState(productToEdit)
    useEffect(()=>{
      setNewProductItem(productToEdit)
    },[productToEdit])

    function handleEditTitle(e){
      let newProduct = {
        ...newProductItem,
        productTitle: e.target.value,
      }
      setNewProductItem(newProduct)
    }

    function handleEditImage(e){
      let newProduct = {
        ...newProductItem,
        productImage: e.target.value,
      }
      setNewProductItem(newProduct)
    }

    function handleEditType(e){
      let newProduct = {
        ...newProductItem,
        productType: e.target.value,
      }
      setNewProductItem(newProduct)
    }

    function handleEditPrice(e){
      let newProduct = {
        ...newProductItem,
        productPrice: e.target.value,
      }
      setNewProductItem(newProduct)
    }

    function handleEditDescription(e){
      let newProduct = {
        ...newProductItem,
        productDescription: e.target.value,
      }
      setNewProductItem(newProduct)
    }

  return (
    <div className="container-xxl">
      <div>
        {newProductItem ? 
        <>
          <input
          type="text"
          placeholder="Title"
          value={newProductItem.productTitle}
          onChange={handleEditTitle}
        />
        <br />
        <input
          type="text"
          placeholder="Image"
          value={newProductItem.productImage}
          onChange={handleEditImage}
        />{" "}
        <br />
        <input
          type="text"
          placeholder="Type"
          value={newProductItem.productType}
          onChange={handleEditType}
        />{" "}
        <br />
        <input
          type="text"
          placeholder="Price"
          value={newProductItem.productPrice}
          onChange={handleEditPrice}
        />{" "}
        <br />
        <input
          type="text"
          placeholder="Description"
          value={newProductItem.productDescription}
          onChange={handleEditDescription}
        />
        <br />
          <div className="btn btn-danger ps-5 pe-5" 
          onClick={() => {saveProduct(newProductItem, props.history) }}>
            Save
          </div>
        </>
         : <h1> Товары загружается...</h1> 
         }
      </div>
    </div>
  );
};

export default Edit;
