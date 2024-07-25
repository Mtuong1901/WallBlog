import Users from "./users";

export default function Userlist(props){
    const list = props.data; 
    return (
        <>
          <div>
            {list.map((item) => (
              <div key={item._id}>
                <Users data={item}/>
              </div>
            ))}
          </div>
        </>
    )
}