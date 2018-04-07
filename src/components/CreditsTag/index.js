import React from "react";

export default ({ post }) => {

  return (
    <p>
      by Evan Conrad,{" "}
      <b>{post.frontmatter.date}</b>
    </p>
  );
};
