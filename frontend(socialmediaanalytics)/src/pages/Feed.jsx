import React, { useEffect, useState } from "react";
import { fetchApi } from "../api/api";
import PostCard from "../components/PostCard";

const Feed = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchPosts = () => {
            fetchApi("/posts?type=latest").then((data) => {
                if (data) setPosts(data);
            });
        };

        fetchPosts();
        const interval = setInterval(fetchPosts, 5000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="p-4">
            <h1 className="text-xl font-bold">Live Feed</h1>
            {posts.map((post) => (
                <PostCard key={post.id} post={post} />
            ))}
        </div>
    );
};

export default Feed;