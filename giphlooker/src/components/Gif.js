export default function Gif ({id, title, url}){
    return (
        <div>
          <h4>{title}</h4>
          <small>{id}</small>
          <img src={url} />
        </div>
      )
}