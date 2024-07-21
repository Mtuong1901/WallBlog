"use client";
import Link from "next/link";
import useSWR from "swr";
import { useState } from "react";
import CommentModal from "./commentModal"; // Giả định rằng bạn đã tạo CommentModal
import Postlist from "./postlist";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function Mainside() {
  
  const { data: posts, error: posterror } = useSWR(
    `${process.env.NEXT_PUBLIC_API}/posts`,
    fetcher
  );

  if (!posts) return <div>Loading...</div>;
  if (posterror) return <div>Failed to load products</div>;

  return (
    <>
      <div className="main-sidebar px-0">
        <div className="main-nav">
          <ul className="nav">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                FOR YOUU
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="#">
                FOLLOW
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="#">
                YOUUR TAGS
              </a>
            </li>
          </ul>
          <div className="configure-tab">
            <i className="configure fa-solid fa-sliders"></i>
          </div>
        </div>
        <div className="m-container">
          <Postlist data={posts}/>
          {/* <div className="container-group">
            <div className="m-contents">
              <div className="m-title">
                <img
                  className="m-image"
                  src="https://i.pinimg.com/236x/bf/ec/cb/bfeccb129452396b17006d199d4cc784.jpg"
                  alt="User"
                />
                <h3>UserName</h3>
              </div>
              <div className="m-action">...</div>
            </div>
            <div className="post-container">
              <div className="p-title">
                <h2>Thiiss iis title</h2>
              </div>
              <div className="p-content">
                <img
                  className="p-image"
                  src="https://cdn.pixabay.com/photo/2023/06/29/05/50/cowboy-8095717_1280.jpg"
                  alt="Post"
                />
                <p>noii dunug gi do ko qua dai</p>
              </div>
              <div className="p-total">1,88222 posts</div>
              <div className="p-action">
                <a href="#" className="like">
                  <i className="fa-solid fa-thumbs-up"></i>
                </a>
                <i className="fa-solid fa-comment-dots" onClick={openComment}></i>
                <a href="#" className="reblog">
                  <i className="fa-solid fa-retweet"></i>
                </a>
                <a href="#" className="share">
                  <i className="fa-solid fa-share"></i>
                </a>
              </div>
            </div>
            <CommentModal show={isShow} onClose={closeComment} />
          </div> */}
        </div>
      </div>
    </>
  );
}
