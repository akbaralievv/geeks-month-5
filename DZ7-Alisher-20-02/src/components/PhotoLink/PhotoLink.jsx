import { Link } from "react-router-dom"

function PhotoLink({photoInfo}) {
  return (
      <li>
        <Link to={`/photos/${photoInfo.id}`}>{photoInfo.title}</Link>
      </li>
  )
}

export default PhotoLink