import React from 'react';
import { renderCategory } from '../../helperFunctions/helper';

const CategoryMenu = (props) => {
    const {categories} = props
  return (
    <div className='category-menuo' >
      <ul >
      {
        renderCategory(categories)
      }
    </ul>
    </div>
  )
}

export default CategoryMenu
