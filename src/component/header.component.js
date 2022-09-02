import React from 'react';
function Header (){

return(

<div className='headbox align-items-center d-flex justify-content-between'>
    <div className='logo'>
      <a href='#'><img src='images\logo.jpg' alt='logo'/></a>
    </div>

    <nav className='navigation'>
        <ul className='d-flex mb-0'>
            <li><a href='#'>New in</a></li>
            <li><a href='#'>Clothing</a></li>
            <li><a href='#'>Tops</a></li>
            <li><a href='#'>Dresses</a></li>
            <li><a href='#'>Loungewear</a></li>
            <li><a href='#'>Curve</a></li>
            <li><a href='#'>Trends</a></li>
            <li><a href='#'>Lookbook</a></li>
            <li><a href='#'>Sales</a></li>
        </ul>
    </nav>

    <div className='searchbox'>
        <input type="text" placeholder='Search' />
    </div>

</div>

)
}
export default Header