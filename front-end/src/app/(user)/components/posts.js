import { useState } from "react";
import CommentModal from "./commentModal";
import LikeButton from "./like";
import Link from "next/link";

export default function Posts(props) {
    const post = props.data;
    const [like, setLike] = useState([]);
    const [isShow, setIsShow] = useState(false);

  const openComment = () => {
    setIsShow(true);
  };

  const closeComment = () => {
    setIsShow(false);
  };
  const handleLikeChange = (postId, newLikeCount) => {
    setLike(like.map(post =>
      post._id === postId ? { ...post, like: newLikeCount } : post
    ));
  };
    return (
        <>
            <div className="container-group">
                <div className="m-contents">
                    <div className="m-title">
                        <img className="m-image" src="https://i.pinimg.com/236x/bf/ec/cb/bfeccb129452396b17006d199d4cc784.jpg" alt="Author's image" />
                        <h3>{post.author}</h3>
                    </div>
                    <div className="m-action">
                        ...
                    </div>
                </div>
                <div className="post-container">
                    <div className="p-title">
                        <h2>{post.title}</h2>
                    </div>
                    <div className="p-content">
                        {post.image && (
                            <img className="p-image" src={`${process.env.NEXT_PUBLIC_IMAGE_URL}/${post.image}`} alt={post.title} />
                        )}
                        <p>
                            {post.content}
                        </p>
                    </div>
                    <div className="p-total">
                        1,88222 posts
                    </div>
                    <div className="p-action">
                    <LikeButton 
                    initialLikes={post.like} postId={post._id}
                    onLikeChange={(newLikeCount) => handleLikeChange(newLikeCount)}
                    >
                    </LikeButton>
                    <i className="comment-icon fa-solid fa-comment-dots" onClick={openComment}></i>
                    <a href="#" className="reblog"><i className="fa-solid fa-retweet"></i></a>
                    <a href="#" className="share"><i className="fa-solid fa-share"></i></a>
                    </div>
                </div>
                <CommentModal    show={isShow} onClose={closeComment} />
            </div>
        </>
    )
}
