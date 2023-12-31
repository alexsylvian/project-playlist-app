import { Link } from "react-router-dom";

function SongCard({ title, id }){
    return(
        <article>
            <h2>{title}</h2>
            <Link to={`/song/${id}`}>View Song Info</Link>
        </article>
    )
}

export default SongCard