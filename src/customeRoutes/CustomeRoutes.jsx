import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import AddBlog from "../pages/AddBlog";
import ReadBlog from "./../pages/ReadBlog";

function CustomeRoutes() {
  const [blogData, setBlogData] = useState(
    JSON.parse(localStorage.getItem("blogData")) || []
  );

  return (
    <Routes>
      <Route
        path="/"
        element={
          <HomePage blogData={(blogData = [])} setBlogData={setBlogData} />
        }
      />
      <Route
        path="/addblog"
        element={<AddBlog prevData={blogData} updateData={setBlogData} />}
      />
      <Route path="/readblog/:id" element={<ReadBlog blogData={blogData} />} />
    </Routes>
  );
}

export default CustomeRoutes;
