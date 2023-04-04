import "./Gif.css";
import GifDetail from "./GifDetail";

export default function Gif ({id, title, url}){
  const gifHandler = (id) => {
    console.log(id);
    return(
      <>
        <GifDetail id={id}/>
      </>
    )
  }

    return (
        <a onClick={()=>{gifHandler(id)}} href={`/gifdetail/${id}`} className="Gif">
          <h4>{title}</h4>
          <img className="GifImage" src={url} />
        </a>
      )
}