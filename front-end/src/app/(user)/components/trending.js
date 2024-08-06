import useSWR from "swr";
import Userlist from "./userlist";
import { BASE_API_URL } from "@/app/unitil/contants";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function Trending(){
    const {data:users,error:userserror} = useSWR(`${BASE_API_URL}/users`,fetcher);
    if(!users) return <div>Loading...</div>
    if(userserror) return <div>Failed to load users</div>
    return (
        <>
         <div className="trending">
            <h3 className="trend-title" align="center">Check out these blogs</h3>
            <hr></hr>
            <div className="trend-container">
                <Userlist data={users}/>
            </div>
            <hr></hr>
        </div>
        </>
    )
}