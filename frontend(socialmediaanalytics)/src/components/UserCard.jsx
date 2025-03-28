import React from "react";

const UserCard = ({ user }) => {
    return (
        <div className="card m-3" style={{ width: "18rem" }}>
            <img 
                src={alt="User"} 
                className="card-img-top" 
                alt="User" 
            />
            <div className="card-body">
                <h5 className="card-title">{user.name}</h5>
                <p className="card-text">Posts: {user.postCount}</p>
                <a href="#" className="btn btn-primary">View Profile</a>
            </div>
        </div>
    );
};

export default UserCard;


