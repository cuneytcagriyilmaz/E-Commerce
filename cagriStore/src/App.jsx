import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import HomePage from './pages/HomePage';
import ProductListPage from './pages/ProductListPage';
import ProductDetailPage from './pages/ProductDetailPage';
import Contact from './pages/Contact';
import AboutUs from './pages/AboutUs';
import Team from './pages/Team';
import Pricing from './pages/Pricing';
import SignUpPage from './pages/SignUpPage';
import LoginPage from './pages/LoginPage';
import LoadingSpinner from './layout/LoadingSpinner';


function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  return (
    <Router>
      <div>
        {isLoading ? (
          <LoadingSpinner />
        ) : (
          <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="/shop" exact component={ProductListPage} />
            <Route path="/shop/:category" exact component={ProductListPage} />

            <Route path="/shop/item/:id" exact component={ProductDetailPage} />
            <Route path="/contact" component={Contact} />
            <Route path="/aboutus" component={AboutUs} />
            <Route path="/team" component={Team} />
            <Route path="/pricing" component={Pricing} />
            <Route path="/signup" component={SignUpPage} />
            <Route path="/login" component={LoginPage} />
          </Switch>
        )}
        <ToastContainer />
      </div>
    </Router>
  );
}

export default App;
