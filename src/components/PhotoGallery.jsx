
export const PhotoGallery = ({item: {height, flexGrow, width, urlImg }}) => {
    return (
            <div>
            <img src={`${urlImg}`} alt='' style={{width: `${width}`, height: `${height}`, flexGrow: `${flexGrow}`, objectFit: 'cover'}}/>
            </div>

      
    )
}