import React,{Component} from 'react';  

import OwlCarousel from 'react-owl-carousel';
//import OwlCarousel from 'react-owl-carousel';  
//import 'owl.carousel/dist/assets/owl.carousel.css';  
//import 'node_modules/owl.theme.default.css';  
//import 'node_modules/owlCarousel/dist/assets/owl.carousel.css'
//import '../../../testproject/node_modules/owl'
//import './owl.css';  
export class Owldemo1 extends Component {  
        render()  
        {  
          return (  
          
        <OwlCarousel items={3}  
          className="owl-theme"  
          loop  
          nav  
          margin={8} >  
           <div><img  className="img" src= {'images/slide1.jpg'}/></div>  
           <div><img  className="img" src= {'images/slide1.jpg'}/></div>  
           <div><img  className="img" src= {'images/slide1.jpg'}/></div>  
           <div><img  className="img" src= {'images/slide1.jpg'}/></div>  
           <div><img className="img" src= {'images/slide1.jpg'}/></div>  
           <div><img className="img" src= {'images/slide1.jpg'}/></div>  
           <div><img className="img" src= {'images/slide1.jpg'}/></div>  
      </OwlCarousel>  
       
  
       
          )  
        }  
      }  
        
  
export default Owldemo1