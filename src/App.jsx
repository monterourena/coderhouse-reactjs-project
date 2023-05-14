import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

// Components
import Navbar from "./components/NavBar/NavBar";
import HomeScreen from "./screens/Home/HomeScreen";
import CategoryScreen from "./screens/Category/CategoryScreen";
import ProductScreen from "./screens/Product/ProductScreen";
import CartScreen from "./screens/Cart/CartScreen";
import Footer from "./components/Footer/Footer"
import ScrollToTop from "./utils/ScrollToTop";

// Context
import { GlobalContextProvider } from "./contexts/GlobalContextProvider";
import { CartContextProvider } from "./contexts/CartContextProvider";
import { ShowToast } from "./utils/ShowToast";

function App() {
  <ScrollToTop component={<CategoryScreen />} />;

  return (
    <BrowserRouter>
      <GlobalContextProvider>
        <CartContextProvider>
          <Navbar />
          <Routes>
            <Route
              path="/"
              element={<ScrollToTop component={<HomeScreen />} />}
            />
            <Route
              path="/category/:cid"
              element={<ScrollToTop component={<CategoryScreen />} />}
            />
            <Route
              path="/item/:key"
              element={<ScrollToTop component={<ProductScreen />} />}
            />

            <Route
              path="/cart"
              element={<ScrollToTop component={<CartScreen />} />}
            />
            <Route
              path="/order/:oid"
              element={<ScrollToTop component={<HomeScreen />} />}
            />
            {/* <Route path="*" element={<Navigate to="/" />} /> */}
          </Routes>
        <Footer/>
        </CartContextProvider>
      </GlobalContextProvider>
      <ShowToast />
    </BrowserRouter>
  );
}

export default App;
