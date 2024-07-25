export default function Users(props){
    const user = props.data;
    return (
        <>
                    <div className="trend-item">
                        <img className='trend-img' src={`${process.env.NEXT_PUBLIC_IMAGE_URL}/${user.image}`}></img>
                        <div className="trend-public">
                            <h5>{user.username}</h5>
                            <p>{user.description}</p>
                        </div>
                        <div className="trend-action">
                            <a href="#" className="folow">Folow</a>
                            <i className="fa-solid fa-x"></i>
                        </div>
                    </div>
        </>
    )
}