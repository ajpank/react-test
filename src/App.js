import logo from './logo.svg';
import './App.css';
import Header from './component/header.component';
import Footer from './component/footer.component';
//import Test from './component/test.component';
import {Route,BrowserRouter} from "react-router-dom";
import React from 'react';
import Category from './component/category';
import Product from './component/product';
import Salestripe from './component/salestripe';
import Heroslider from './component/heroslider.component';
import body3image from './component/body3image.component';
import Owldemo1 from './component/owlcarousel.component';

function App() {
  return (
    <>
    
    <BrowserRouter>
      
        <Header/>
        <Route exact path='/Header' component={Header} />
        <Route path='' component={Salestripe} />
        <Route path='' component={Heroslider} />
        <Route path='' component={body3image} />
        <div className="App">  
          <Owldemo1/>  
        </div>
        {/* <Route path='' component={Owldemo1} /> */}
        <Route exact path='/Product' component={Product} />
        <Route exact path='/Category' component={Category} />
       
        <Footer/>
        <Route exact path='/Footer' component={Footer} />
      
    </BrowserRouter>

    
    </>
  );
}

export default App;
