import { GalleryContainer } from './styles/GalleryContainer'

export const PhotoGallery = ({item: {id, flexGrow, width, urlImg }}) => {
    return (
        <GalleryContainer>
            <img src={`${urlImg}`} alt='' />

        </GalleryContainer>
    )
}