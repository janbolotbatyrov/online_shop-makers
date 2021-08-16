import React, { useReducer } from "react";
import axios from "axios";
export const productContext = React.createContext();

const INIT_STATE = {
  products: [],
  productToEdit: null,
  detail: {},
  adminData: {
    userName: "",
    password: ''
  }
};
const reducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case "GET_PRODUCTS_DATA":
      return {
        ...state,
        products: action.payload,
      };
    case "EDIT_PRODUCT":
      return { ...state, productToEdit: action.payload };
    case "GET_DETAIL_PRODUCT":
      return { ...state, detail: action.payload };
    case "GET_ISADMIN":
      return { ...state, isAdmin: action.payload };
    default:
      return state;
  }
};

const ProductContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  const getProductsData = async () => {
    let { data } = await axios(
      `${API}${window.location.search}`
    );
    dispatch({
      type: "GET_PRODUCTS_DATA",
      payload: data,
    });
  };

  const addProduct = (newTask) => {
    axios.post("https://online-shop-janbolot.herokuapp.com/api/products", newTask);
    getProductsData();
  };

  const deleteProduct = async (id) => {
    await axios.delete(`https://online-shop-janbolot.herokuapp.com/api/products/${id}`);
    getProductsData();
  };

  const editProduct = async (id, history) => {
    let { data } = await axios(`https://online-shop-janbolot.herokuapp.com/api/products/${id}`);
    dispatch({
      type: "EDIT_PRODUCT",
      payload: data,
    });
    history.push("/edit");
  };

  const saveProduct = async (newProduct, history) => {
    await axios.patch(
      `https://online-shop-janbolot.herokuapp.com/api/products/${newProduct.id}`,
      newProduct
    );
    history.push("/products");
  };

  const getDetail = async (id) => {
    const { data } = await axios(`https://online-shop-janbolot.herokuapp.com/api/products/${id}`);
    dispatch({
      type: "GET_DETAIL_PRODUCT",
      payload: data,
    });
  };

  const checkAdmin = async(loginData,history) => {
    let data = await axios.patch('https://online-shop-janbolot.herokuapp.com/api/admin/1', loginData)  
    history.push('/')
  }

  const logout = async(loginData) => {
    let {data} = await axios.patch('https://online-shop-janbolot.herokuapp.com/api/admin/1', loginData)  
    window.location.replace('login')
  }

  const addToCard = (e) => {
    e.stopProgation()
    console.log('ADD TO CART')
  }

  return (
    <productContext.Provider
      value={{
        products: state.products,
        productToEdit: state.productToEdit,
        detail: state.detail,
        isAdmin: state.isAdmin,
        addProduct,
        getProductsData,
        editProduct,
        saveProduct,
        deleteProduct,
        getDetail,
        checkAdmin,
        logout,
        addToCard
      }}
    >
      {children}
    </productContext.Provider>
  );
};

export default ProductContextProvider;
