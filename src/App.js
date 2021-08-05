import './App.css';
import ProductContextProvider from './context/ProductContext';
import Routes from './Routes';

function App() {
  return (
    <div>
      <ProductContextProvider>
          <Routes />
      </ProductContextProvider>
    </div>
  );
}

export default App;
