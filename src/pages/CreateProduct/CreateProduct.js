import React from 'react'
import "../CreateProduct/CreateProduct.css"
import NavbarPrivate from '../../components/Navbar/NavbarPrivate.js'
import { Link } from 'react-router-dom'
import CreateProductForm from '../../components/CreateProductForm/CreateProductForm.js'

const CreateProduct = () => {
  return (
    <div>
    <div>
      <NavbarPrivate />
    </div>
    <div className="routes-in-page">
      <ul>
        <Link to="/" style={{ textDecoration: "none" }}>
          <li className="home">HOME /</li>
        </Link>
        <Link to="/cadastrar-produto" style={{ textDecoration: "none" }}>
          <li className="home"> CADASTRAR PRODUTO</li>
        </Link>
      </ul>
    </div>
    <div className='productForm'>
      <CreateProductForm/>
    </div>
  </div>
  )
}

export default CreateProduct