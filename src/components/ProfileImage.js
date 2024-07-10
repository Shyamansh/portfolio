import React from "react";
import "./ProfileImage.css";

const ProfileImage = () => {
    return <img src={`${process.env.PUBLIC_URL}/IMAGE.jpg`} alt="Shyamansh Sharma" className="profile-image" />;
};

export default ProfileImage;
