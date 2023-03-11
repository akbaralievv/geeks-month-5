import { useSelector } from "react-redux"
import { useParams } from "react-router-dom"




function PhotoPage()
{
   const { id } = useParams()
    const { photos } = useSelector(state => state.photosReducer)
    const photo = photos.find(photo => photo.id === parseInt(id))
    return (
        <>
            {

                    <>
                        <h2>{photo.title}</h2>
                        <img style={{width: '300px'}} src={photo.url} alt={photo.title} />
                    </>
            }
        </>
    )
}

export default PhotoPage