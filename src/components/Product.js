import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Product = () => {
     return (<>
          <h1>Products</h1>
          <input type="search" placeholder="search product" />
          <ul className='nav'>
               <Link to="featured">
                    <li>Featured</li>
               </Link>
               <Link to="new">
                    <li>New</li>
               </Link>
          </ul>
          <Outlet />
     </>
     )
}

export default Product