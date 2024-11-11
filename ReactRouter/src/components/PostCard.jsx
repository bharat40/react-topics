import React from "react";
import { Link } from "react-router-dom";

const PostCard = ({ post }) => {
  return (
    <div className=" p-4 bg-gray-900 h-[400px] w-[400px] rounded-sm">
      <h1 className="text-2xl font-semibold text-gray-200">
        Title: {post.title}
      </h1>
      <p className="text-gray-300">Description: {post.body}</p>
      <Link
        to={`/posts/${post.id}`}
        className="bg-gray-700 text-white px-2 py-1 rounded-sm"
      >
        View Comments
      </Link>
    </div>
  );
};

export default PostCard;
