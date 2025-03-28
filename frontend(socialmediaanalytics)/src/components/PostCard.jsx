import React from "react";

const PostCard = ({ post }) => {
    return (
        <div className="p-4 bg-gray-100 shadow rounded-lg m-2">
            <h3 className="font-bold">{post.title}</h3>
            <p>{post.body}</p>
        </div>
    );
};

export default PostCard;