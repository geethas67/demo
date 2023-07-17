import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Login from "./components/Login/Login";
import Contact from "./components/Contact/Contact";
import ProductListing from "./components/ProductListing";
import ProductDetails from "./components/ProductDetails";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          {/* <Route path="/login" exact component={Login} /> */}
          <Route path="/" exact element={<ProductListing />} />
          <Route
            path="/product/:productId"
            exact
            element={<ProductDetails />}
          />
          <Route>404 Not Found! </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
