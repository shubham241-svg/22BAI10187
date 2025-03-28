
import { fetchApi } from "../api/api";

export const latestandTopPosts = async (req, res) => {
    const query = req.query.type;
    
    const userinfo = await fetchApi("/users");
    if (!userinfo || !userinfo.users) {
        return res.status(500).json({ message: "Error fetching users" });
    }

    let Postsarray = [];

    await Promise.all(
        Object.keys(userinfo.users).map(async (userId) => {
            const posts = await fetchApi(`/users/${userId}/posts`);
            if (posts) {
                Postsarray.push(...posts);
            }
        })
    );

    if (query === "popular") {
        const commentCounts = {};

        await Promise.all(
            Postsarray.map(async (post) => {
                const comments = await fetchApi(`/posts/${post.id}/comments`);
                commentCounts[post.id] = comments ? comments.length : 0;
            })
        );

        const maxCountComment = Math.max(...Object.values(commentCounts));

        const popularPost = Postsarray.filter(post => commentCounts[post.id] === maxCountComment);

        return res.json(popularPost);
    } else if (query === "latest") {
        const latestPosts = Postsarray
            .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
            .slice(0, 5);

        return res.json(latestPosts);
    } else {
        return res.status(400).json({ message: "Invalid type parameter" });
    }
};

