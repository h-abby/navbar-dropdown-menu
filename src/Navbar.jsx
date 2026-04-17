import React,{useState} from 'react'
import { Link } from 'react-router'
import { navItems } from './nav'
import Button from './Button'
import ServicesDropdown from './ServicesDropdown'
import ProductsDropdown from './ProductsDropdown'

function Navbar() {
  const [servicesDropdown, setServicesDropdown] = useState(false)
  const [productsDropdown, setProductsDropdown] = useState(false)

  return (
    <nav className='navbar'>
        <Link to='/' className='nav-logo'>Nav-Logo</Link>
         <ul className="nav-items">
            {
                navItems.map(item=> {
                    const {id, title, path, cName} = item
                    if (title === 'Products') {
                        return <li key={id} className={cName} onMouseLeave={()=> setProductsDropdown(false)}>
                        <Link to={path} onMouseEnter={()=> setProductsDropdown(true)} 
                         onClick={()=> setProductsDropdown(!productsDropdown)}
                        className={productsDropdown? 'p-active' : null}>{title}</Link>
                        {productsDropdown && <ProductsDropdown setProductsDropdown={setProductsDropdown}/>}
                    </li>
                    }

                    if (title === 'Services') {
                        return <li key={id} className={cName} onMouseLeave={()=> setServicesDropdown(false)}>
                        <Link to={path} onMouseEnter={()=> setServicesDropdown(true)} 
                        onClick={()=> setServicesDropdown(!servicesDropdown)}
                        className={servicesDropdown? 's-active' : null}>{title}</Link>
                        {servicesDropdown && <ServicesDropdown setServicesDropdown={setServicesDropdown}/>}
                    </li>
                    }
                    return <li key={id} className={cName}>
                        <Link to={path} >{title}</Link>
                    </li>
                })
            }
         </ul>
         <Button/>
    </nav>
  )
}

export default Navbar