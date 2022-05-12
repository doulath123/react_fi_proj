import React from 'react'
import "./Nav.css"

function Nav() {
  return (
    <div className='header'>
        <h1 className='home_icon'>Home</h1>
         <div className='header_search'><input className='header_searchInput' type="text" /><img className='search_icon' src='https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTUGM5tGIk8h3hEsPgggIe-vk49J0vpmc48TWdCtyVwWR7c8mtj'/></div>
         <div className='header_nav'>
         <div className='header_option'>
           <span className='header_optionone'>Hello Doulath</span>
           <span className='header_optiontwo'>Sign In</span>
          
           
         </div>
         <div className='header_option'>
         <span className='header_optionone'>your</span>
           <span className='header_optiontwo'>& Order</span>
         </div>
         <div className='header_option'>
         <span className='header_optionone'>Your</span>
           <span className='header_optiontwo'>Prime</span>
         </div>
         <div className='basket'>🧺<span className='basket_count'>0</span></div>
         
         
       </div>
    </div>
  )
}

export default Nav
