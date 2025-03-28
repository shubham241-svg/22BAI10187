import { fetchApi } from "../api/api.js";

export const TopUsers = async(req, res)=>{
    const userinfo = await fetchApi("/users");
    if(!userinfo){
        res.status(500).json({message: "Error in fetching user"});

    }
    console.log(userinfo);
    const users = userinfo.users;
    const postCount = {};

    // to calculate the no.of posts for each user
    await Promise.all(
        Object.keys(users).map(async(userId)=>{
            const posts = await fetchApi(`/users/${userId}/posts`);
            if(posts){
                postCount[userId] = posts.length;
            }
        })
    )

    const topUser = Object.entries(users).map(([id, name])=>({
        id, 
        name, 
        postCount: postCount[id] || 0,
    })).sort((a, b)=> b.postCount - a.postCount)
    .slice(0,5);

    res.json(topUser)


}; 
