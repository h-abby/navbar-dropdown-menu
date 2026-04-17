import React from 'react'
import {servicesDropdown} from './nav'
import { Link } from 'react-router'

function ServicesDropdown({setServicesDropdown}) {
  return (
    <ul className='services-submenu' onClick={()=>setServicesDropdown(false)}>
        {
          servicesDropdown.map(item=> {
            const {id, title, path, cName} = item
            return <li key={id}>
              <Link to={path} className={cName}>{title}</Link>
            </li>
          })
        }
    </ul>
  )
}

export default ServicesDropdown