
export const PhotoGallery = ({item: {height, flexGrow, width, name, alt, urlImg }}) => {

    const imageStyle = {
        width: `${width}`,
        height: `${height}`, 
        flexGrow: `${flexGrow}`, 
        objectFit: 'cover',
        border: '5px solid white',


    }

    return (
            <div>
            <img src={`${urlImg}`} alt={`${alt}`} style={imageStyle}/>
            <p>{name}</p>
            </div>

      
    )
}