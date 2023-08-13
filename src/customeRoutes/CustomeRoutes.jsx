import React, { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from '../pages/HomePage'
import AddBlog from '../pages/AddBlog'

function CustomeRoutes() {

    const [blogData, setBlogData] = useState([
        {title: "BLOG 1", img: "https://cdn.pixabay.com/photo/2023/07/28/15/14/wall-8155414_640.jpg", desc: "Description 1"},
        {title: "BLOG 2", img: "https://cdn.pixabay.com/photo/2023/07/28/10/17/machinery-8154964_640.jpg", desc: "Description 2"},
        {title: "BLOG 3", img: "https://cdn.pixabay.com/photo/2023/07/28/15/14/wall-8155414_640.jpg", desc: "Description 3"},
        {title: "BLOG 4", img: "https://cdn.pixabay.com/photo/2023/07/28/10/17/machinery-8154964_640.jpg", desc: "Description 4"},
    ]);

  return (
    <Routes>
        <Route path='/' element={<HomePage blogData={blogData} />} />
        <Route path='/addblog' element={<AddBlog prevData={blogData} updateData={setBlogData} />} />
    </Routes>
  )
}

export default CustomeRoutes