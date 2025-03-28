import React, { useEffect } from 'react'
import { fetchApi } from '../api/api'
import PostCard from '../components/PostCard';

import React, { useEffect, useState } from "react";
import { fetchApi } from "../api/api";
import PostCard from "../components/PostCard";

const TrendingPosts = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetchApi("/posts?type=popular").then((data) => {
            if (data) setPosts(data);
        });
    }, []);

    return (
        <div className="p-4">
            <h1 className="text-xl font-bold">Trending Posts</h1>
            {posts.map((post) => (
                <PostCard key={post.id} post={post} />
            ))}
        </div>
    );
};

export default TrendingPosts