import styled from 'styled-components'

export const GalleryContainer = styled.div`
    max-width: 100%;
    margin: auto;
    display: flex;
    flex-wrap: wrap;
    object-fit: cover;
    justify-content: center;
    
    @media(max-width: ${( {theme }) => theme.mobile}) {
        flex-direction: column
        justify-content: center;
        
    }
`
