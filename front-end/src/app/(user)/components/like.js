import React, { useState } from "react";

export default function LikeButton({ initialLikes, postId, onLikeChange }) {
  const [likes, setLikes] = useState(initialLikes);
  const [liked, setLiked] = useState(false);

  const handleLike = async () => {
    const newLikes = liked ? likes - 1 : likes + 1;
    setLikes(newLikes);
    setLiked(!liked);
  
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API}/posts/${postId}/like`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ like: newLikes }),
      });
  
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
  
      if (onLikeChange) {
        onLikeChange(postId, newLikes);
      }
    } catch (error) {
      console.error('Error updating likes:', error);
      // Khôi phục lại trạng thái trước đó nếu có lỗi
      
    }
  };
  

  return (
    <div className="like-button" onClick={handleLike}>
      <i className={`fa-solid fa-thumbs-up ${liked ? "liked" : ""}`}></i>
      <span>{likes}</span>
    </div>
  );
}
