"use client";
import Link from "next/link";
import useSWR from "swr";
import Postlist from "./postlist";
import { BASE_API_URL } from "@/app/unitil/contants";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function Mainside() {
  const { data: posts, error: posterror } = useSWR(
    `${BASE_API_URL}/posts`,
    fetcher
  );

  if (!BASE_API_URL) return null;
  if (!posts) return <div>Loading...</div>;
  if (posterror) return <div>Failed to load posts</div>;

  return (
    <>
      <div className="main-sidebar px-0">
        <div className="main-nav">
          <ul className="nav">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                FOR YOU
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                FOLLOW
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                YOUR TAGS
              </a>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="#">
                REBLOG
              </Link>
            </li>
          </ul>
          <div className="configure-tab">
            <i className="configure fa-solid fa-sliders"></i>
          </div>
        </div>
        <div className="m-container">
          <Postlist data={posts} />
        </div>
      </div>
    </>
  );
}
