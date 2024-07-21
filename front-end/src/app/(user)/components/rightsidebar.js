export default function Rightsidebar(){
    return(
        <>
        <div className="right-sidebar">
            <div className="search-container">
                <form action="#" method="GET">
                <input className="search-input" type="text" placeholder="Search..." name="query"></input>
                <i className="search-icon fa-solid fa-magnifying-glass"></i>
                </form>
            </div>
            <div className="trending">
                <h3 className="trend-title" align="center">Maybe you know these</h3>
                <hr></hr>
                <div className="trend-container">
                    <div className="trend-item">
                        <img className='trend-img' src='https://i.pinimg.com/736x/08/f7/4b/08f74b917aa452add50b02a12ad7216c.jpg'></img>
                        <div className="trend-public">
                            <h5>Username</h5>
                            <p>Lorem ipsum dolor sit amet.</p>
                        </div>
                        <div className="trend-action">
                            <a href="#" className="folow">Folow</a>
                            <i className="fa-solid fa-x"></i>
                        </div>
                    </div>
                    <div className="trend-item">
                        <img className='trend-img' src='https://i.pinimg.com/474x/3e/77/11/3e7711468a8cf11d255bee6b0f07c4b0.jpg'></img>
                        <div className="trend-public">
                            <h5>Username</h5>
                            <p>Lorem ipsum dolor sit amet.</p>
                        </div>
                        <div className="trend-action">
                            <a href="#" className="folow">Folow</a>
                            <i className="fa-solid fa-x"></i>
                        </div>
                    </div>
                    <div className="trend-item">
                        <img className='trend-img' src='https://i.pinimg.com/236x/46/22/fc/4622fc1ddb067143cd259b4b2a94ac4c.jpg'></img>
                        <div className="trend-public">
                            <h5>Username</h5>
                            <p>Lorem ipsum dolor sit amet.</p>
                        </div>
                        <div className="trend-action">
                            <a href="#" className="folow">Folow</a>
                            <i className="fa-solid fa-x"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}