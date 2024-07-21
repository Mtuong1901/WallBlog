'use client'
import Leftsidebar from "./components/leftsidebar";
import Mainside from "./components/mainside";
import Rightsidebar from "./components/rightsidebar";

export default function Home(){
  return (
    <>
    <div className="container  p-0">
      <div className="row d-flex ">
        <div className="col-md-2">
          <Leftsidebar />
        </div>
        <div className="col-md-7">
          <Mainside/>
        </div>
        <div className="col-md-3">
          <Rightsidebar/>
        </div>
      </div>
    </div>
    </>
  )
}