import React,{Component} from 'react';  
import OwlCarousel from 'react-owl-carousel'; 
export class Owldemo1 extends Component {  
        render()  
        {  
          return (  
          
        <OwlCarousel items={3}  
          className="owl-theme"  
          loop  
          nav  
          margin={10} >  
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