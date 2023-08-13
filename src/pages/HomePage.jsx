import React, { useState } from 'react';
import BlogCard from '../components/BlogCard';
import '../styles/homepage.css';

function HomePage(props) {
  
  return (
    <div>
        <div id='blogp4arent'>
            {
                props.blogData.map((e) => {
                return <BlogCard title={e.title} img={e.img} description={e.desc} />
            })
            }
        </div>
    </div>
  )
}

export default HomePage;