import React from 'react'
import '../styles/blogcard.css'

function BlogCard({title, img, description}) {
  return (
    <div className='blogcard'>
        <img src={img} alt="" />
        <h1>{title}</h1>
        <p>{description}</p>
        <button>Read Blog</button>
        <button>Edit Blog</button>
        <button>Delete Blog</button>
    </div>
  )
}

export default BlogCard;