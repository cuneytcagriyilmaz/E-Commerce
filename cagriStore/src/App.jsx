import React from 'react';
import HomePage from './pages/HomePage';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ProductListPage from './pages/ProductListPage';
import ProductDetailPage from './pages/ProductDetailPage';
import Contact from './pages/Contact';
import AboutUs from './pages/AboutUs';

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

          {/* <Route path="/shop" component={Shop} />
          <Route path="/about" component={About} />
          <Route path="/blog" component={Blog} />
          <Route path="/contact" component={Contact} />
          <Route path="/pages" component={Pages} /> */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
