import React from "react";
import "../styles/blogcard.css";
import { NavLink } from "react-router-dom";

function BlogCard({ title, img, description, blogData, setBlogData, id }) {
  const deleteBlog = () => {
    let updatedBlogData = blogData.filter((e, i) => id != i);
    setBlogData([...updatedBlogData]);
    localStorage.setItem("blogData", JSON.stringify(updatedBlogData));
  };

  return (
    <div className="blogcard">
      <img src={img} alt="" />
      <h1>{title}</h1>
      <p>{description}</p>
      <NavLink to={`/readblog/${id}`}>
        <button>Read Blog</button>
      </NavLink>
      <button>Edit Blog</button>
      <button onClick={deleteBlog}>Delete Blog</button>
    </div>
  );
}

export default BlogCard;
