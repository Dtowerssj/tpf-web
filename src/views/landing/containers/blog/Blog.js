import React from 'react'
import './blog.css'
import {Article} from '../../../../components'
import { blog01, blog02, blog03, blog04, blog05 } from './imports'

const a = 'GPT-3 and Open  AI is the future. Let us exlore how it is?';

function Blog() {
  return (
    <div className='blog section__padding' id='about'>
      <div className='blog-heading'>
        <h1 className='gradient__text'>A lot is happening, 
        We are blogging about it.</h1>
      </div>
      <div className='blog-container'>
        <div className='blog-container_groupA'>
          <Article imgUrl={blog01} date='Nov 03, 1999' title={a} />
        </div>
        <div className='blog-container_groupB'>
          <Article imgUrl={blog02} date='Nov 03, 1999' title={a} />
          <Article imgUrl={blog03} date='Nov 03, 1999' title={a} />
          <Article imgUrl={blog04} date='Nov 03, 1999' title={a} />
          <Article imgUrl={blog05} date='Nov 03, 1999' title={a} />
        </div>
      </div>
    </div>
  )
}

export default Blog