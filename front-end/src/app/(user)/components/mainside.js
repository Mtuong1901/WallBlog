import Link from "next/link";

export default function Mainside(){
    return (
        <>
        <div className="main-sidebar px-0">
        <div className="main-nav">
            <ul className="nav">
            <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">FOR YOUU</a>
              </li>
              <li className="nav-item">
                <a className="nav-link " aria-current="page" href="#">FOLLOW</a>
              </li>
              <li className="nav-item">
                <a className="nav-link " aria-current="page" href="#">YOUUR TAGS</a>
              </li>
            </ul>
            <div className="configure-tab">
            <i className="configure fa-solid fa-sliders"></i>
            </div>
        </div>
        {/* main-container */}
            <div className="m-container">
              <div className="m-contents">
                <div className="m-title">
                <img className="m-image" src="https://i.pinimg.com/236x/bf/ec/cb/bfeccb129452396b17006d199d4cc784.jpg"></img>
                <h3>UserName</h3>
                </div>
                <div className="m-action">
                  ...
                </div>
              </div>
              <div className="post-container">
              <div className="p-title">
                <h2>Thiiss iis title</h2>
              </div>
              <div className="p-content">
                <img className="p-image" src="https://cdn.pixabay.com/photo/2023/06/29/05/50/cowboy-8095717_1280.jpg"></img>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod orci ut turpis viverra, ac fermentum mauris vestibulum. Donec vel justo vel dui consectetur convallis. Donec vel justo vel dui consectetur convallis. Donec vel justo vel dui consectetur convallis. Donec vel justo vel dui consectetur convallis. Donec vel justo vel dui consectetur convallis. Donec vel justo vel dui consectetur convallis. Donec vel justo vel dui consectetur convallis. Donec vel justo vel dui consectetur convallis. Donec vel justo vel dui consectetur convallis. Donec vel justo vel dui consectetur convallis. Donec vel justo vel dui consectetur convallis. Donec vel justo vel dui consectetur convallis. Donec vel justo vel dui consectetur convallis. Donec vel justo vel dui consectetur convallis. Donec vel justo vel dui consectetur convallis. Donec vel justo vel dui consectetur convallis. Donec vel justo vel dui consectetur convallis. Donec
                </p>
              </div>
              <div className="p-total">
                1,88222 posts
              </div>
              <div className="p-action">
                <a href="#" className="like"><i class="fa-solid fa-thumbs-up"></i></a>
                <a href="#" className="comment"><i class="fa-solid fa-comment-dots"></i></a>
                <a href="#" className="reblog"><i class="fa-solid fa-retweet"></i></a>
                <a href="#" className="share"><i class="fa-solid fa-share"></i></a>
              </div>
              </div>
            </div>
        </div>
        
        </>
    )
}