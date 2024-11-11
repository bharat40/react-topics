import PostCard from "./PostCard";
import { useState, useEffect } from "react";
const PostLists = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const fetchAPI = async () => {
    setLoading(true);
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/posts?_limit=10"
    );
    const data = await response.json();
    setPosts(data);
    setLoading(false);
  };
  useEffect(() => {
    fetchAPI();
  }, []);
  return (
    <div className="flex flex-wrap justify-center gap-5 bg-gray-950 my-5">
      {loading ? (
        <span className="text-3xl text-white">Loading...</span>
      ) : (
        posts.map((post) => {
          return (
            <div key={post.id}>
              <PostCard post={post} />
            </div>
          );
        })
      )}
    </div>
  );
};

export default PostLists;
