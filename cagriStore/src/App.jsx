import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ToastContainer } from 'react-toastify'; // ToastContainer ekleyin
import 'react-toastify/dist/ReactToastify.css'; // Toastify stillerini ekleyin
import HomePage from './pages/HomePage';
import ProductListPage from './pages/ProductListPage';
import ProductDetailPage from './pages/ProductDetailPage';
import Contact from './pages/Contact';
import AboutUs from './pages/AboutUs';
import Team from './pages/Team';
import Pricing from './pages/Pricing';
import SignUpPage from './pages/SignUpPage';

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/shop" exact component={ProductListPage} />
          <Route path="/shop/:id" component={ProductDetailPage} />
          <Route path="/contact" component={Contact} />
          <Route path="/aboutus" component={AboutUs} />
          <Route path="/team" component={Team} />
          <Route path="/pricing" component={Pricing} />
          <Route path="/signup" component={SignUpPage} />
        </Switch>
        <ToastContainer /> {/* Toastify bileşenini ekleyin */}
      </div>
    </Router>
  );
}

export default App;
