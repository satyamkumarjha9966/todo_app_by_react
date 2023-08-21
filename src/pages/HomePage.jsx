import React, { useState } from "react";
import BlogCard from "../components/BlogCard";
import "../styles/homepage.css";

function HomePage({ blogData = [], setBlogData }) {
  return (
    <div>
      <div id="blogp4arent">
        {blogData?.map((e, i) => {
          return (
            <BlogCard
              title={e.title}
              img={e.img}
              description={e.desc}
              id={i}
              setBlogData={setBlogData}
              blogData={blogData}
            />
          );
        })}
      </div>
    </div>
  );
}

export default HomePage;
