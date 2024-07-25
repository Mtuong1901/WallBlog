import useSWR from "swr";
import Search from "./search";
import Userlist from "./userlist";
import Trending from "./trending";

export default function Rightsidebar(){
    
    return(
        <>
        <div className="right-sidebar">
           <Search/>
           <Trending/>
        </div>
        </>
    )
}