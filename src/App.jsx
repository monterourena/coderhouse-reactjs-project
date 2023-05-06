import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import Navbar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import HomeScreen from "./screens/Home/HomeScreen";
import CategoryScreen from "./screens/Category/CategoryScreen";
import ProductScreen from "./screens/Product/ProductScreen";
import CartScreen from "./screens/Cart/CartScreen";
import ScrollToTop from "./utils/ScrollToTop";

function App() {
  <ScrollToTop component={<CategoryScreen />} />;
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={<ScrollToTop component={<HomeScreen />} />}
          />
          <Route
            path="/category/:id"
            element={<ScrollToTop component={<CategoryScreen />} />}
          />
          <Route
            path="/item/:id"
            element={<ScrollToTop component={<ProductScreen />} />}
          />
          <Route
            path="/cart"
            element={<ScrollToTop component={<CartScreen />} />}
          />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
