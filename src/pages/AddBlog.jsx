import React, { useState } from "react";
import "../styles/form.css";

function AddBlog({ updateData, prevData = [] }) {
  const [blogData, setBlogData] = useState({
    img: "",
    title: "",
    desc: "",
    content: "",
  });

  const submitData = () => {
    let addedBlog = [blogData, ...prevData];
    updateData([blogData, ...prevData]);
    localStorage.setItem("blogData", JSON.stringify(addedBlog));
  };
  return (
    <div id="formparent">
      <div id="form">
        <h1>Add Your Blog, Now!</h1>

        <input
          type="text"
          placeholder="Enter Image of Your Blog"
          value={blogData.img}
          onChange={(e) => setBlogData({ ...blogData, img: e.target.value })}
        />

        <input
          type="text"
          placeholder="Enter Title of Your Blog"
          value={blogData.title}
          onChange={(e) => setBlogData({ ...blogData, title: e.target.value })}
        />

        <input
          type="text"
          placeholder="Enter Description of Your Blog"
          value={blogData.desc}
          onChange={(e) => setBlogData({ ...blogData, desc: e.target.value })}
        />

        <textarea
          placeholder="Write Your Blog"
          name=""
          id=""
          cols="50"
          rows="10"
          value={blogData.content}
          onChange={(e) =>
            setBlogData({ ...blogData, content: e.target.value })
          }
        ></textarea>

        <button onClick={submitData}>Add Blog</button>
      </div>
    </div>
  );
}

export default AddBlog;
