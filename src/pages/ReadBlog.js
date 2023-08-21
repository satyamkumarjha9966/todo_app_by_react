import React, { useEffect, useState } from "react";
import "../styles/ReadBlog.css";
import { useParams } from "react-router-dom";

function ReadBlog({ blogData }) {
  let { id } = useParams();
  const [singleData, setSingleData] = useState([]);

  useEffect(() => {
    let selectedBlog = blogData?.filter((e, i) => {
      return i == id;
    });

    setSingleData({ ...selectedBlog[0] });
  }, [id]);

  return (
    <div id="ReadBlog">
      <img src={singleData?.img} alt="" />
      <h1>{singleData?.title}</h1>
      <p>{singleData?.desc}</p>
      <p>{singleData?.content}</p>
    </div>
  );
}

export default ReadBlog;
