import React from "react";

const Avatar = ({ url, className }) => {
  return (
    <img
      className={`h-10 rounded-full cursor-pointer transition  hover:scale-110 ${className}`}
      src={url}
      alt="avatar"
      loading="lazy"
    />
  );
};

export default Avatar;
