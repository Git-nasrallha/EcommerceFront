import React from 'react'
import { useSelector } from 'react-redux'
import NavbarApp from '../NavbarApp'
import CategoryMenu from './CategoryMenu'

const Header = () => {
  const {categories} = useSelector(state=>state.category);
  return (
    <div className='header'>
      <NavbarApp/>
      <section className='category-section'>
          <CategoryMenu categories={categories}/>
      </section>
    </div>
  )
}

export default Header
