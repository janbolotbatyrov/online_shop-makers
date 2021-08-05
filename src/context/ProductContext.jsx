import React,{useReducer} from 'react'
import axios from 'axios'

export const productContext = React.createContext()

const INIT_STATE ={
    products: [],
    productToEdit: null
}

const reducer = (state = INIT_STATE, action) => {
    switch(action.type){
        case 'GET_PRODUCTS_DATA':
            return {...state, products: action.payload}
        case 'EDIT_PRODUCT':
            return {...state, productToEdit: action.payload}
        default:
            return state
    }
}

const ProductContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, INIT_STATE)

    const getProductsData = async() => {
        let {data} = await axios('http://localhost:8000/products')
        dispatch({
            type: 'GET_PRODUCTS_DATA',
            payload: data
        })
    }

    const addProduct = (newTask) =>{
        axios.post('http://localhost:8000/products',newTask)
        getProductsData()
    }

    const deleteProduct = async(id) => {
        await axios.delete(`http://localhost:8000/products/${id}`)
        getProductsData()
    }

    const editProduct = async(id, history) => {
        let {data} = await axios(`http://localhost:8000/products/${id}`)
        dispatch({
            type: 'EDIT_PRODUCT',
            payload: data
        })
        history.push('/edit')
    }

    const saveProduct = async (newProduct, history) =>{
        await axios.patch(`http://localhost:8000/products/${newProduct.id}`, newProduct)
        history.push('/products')
    }

    return(
        <productContext.Provider value={{
            products: state.products,
            productToEdit: state.productToEdit,
            addProduct,
            getProductsData,
            editProduct,
            saveProduct,
            deleteProduct
        }}>
            {children}
        </productContext.Provider>
    )
}

export default ProductContextProvider;