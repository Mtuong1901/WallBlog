import Posts from "./posts";

export default function Postlist(props){
    const list = props.data
    return (
        <>
          <div>
            {list.map((item) => (
              <div key={item._id}>
                <Posts data={item} />
              </div>
            ))}
          </div>
        </>
      );
}