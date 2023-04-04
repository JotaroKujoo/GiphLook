import { Link } from "wouter";
import "./Gif.css";
import GifDetail from "./GifDetail";

export default function Gif ({id, title, url}){
  

    return (
        <Link  to={`/gifdetail/${id}`} className="Gif linkDesign">
          <h4>{title}</h4>
          <img className="GifImage" key={id} alt={title} src={url} />
        </Link>
      )
}