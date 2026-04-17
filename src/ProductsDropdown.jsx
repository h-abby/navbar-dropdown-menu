import React from 'react'
import { productsDropdown } from './nav'
import { Link } from 'react-router'
function ProductsDropdown({setProductsDropdown}) {
  return (
    <ul className='products-submenu' onClick={()=>setProductsDropdown(false)}>
        {
          productsDropdown.map(item=> {
            const {id, title, path, cName} = item
            return <li key={id}>
              <Link to={path} className={cName}>{title}</Link>
            </li>
          })
        }
    </ul>  )
}

export default ProductsDropdown