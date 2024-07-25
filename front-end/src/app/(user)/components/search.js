export default function Search(){
    function onSubmit(e){
        e.preventDefault();
        
    }
    return(
        <>
        <div className="search-container">
        <form action="#" method="GET" onClick={onSubmit}>
        <input className="search-input" type="text" placeholder="Search..." name="query"></input>
        <i className="search-icon fa-solid fa-magnifying-glass"></i>
        </form>
        </div>
        </>
    )
}