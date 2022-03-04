import styled from 'styled-components'
import { backgroundImg } from '../images/images.js'

export const StyledHeader = styled.header`
    background-image: url(${backgroundImg});
    background-size: cover;
    background-position: center;
    // justify-content: center;
    // padding: 90px 0;
    height: 800px;
    color: #ffff;
    

`

// since the nav and header components are only used in the header component, we put those components in this header style component 

export const Nav = styled.nav`
    display: flex;
    align-items: center;
    justify-content: space-between;
    // margin-bottom: 40px;
    // border: 1px #444 solid;

    // currently flex is row, with media query when size is reduced, direction is set to column 

    @media(max-width: ${( {theme }) => theme.mobile}) {
        flex-direction: column
    }
    `


export const Logo = styled.img`
    // border: 1px #444 solid;
	@media (max-width: ${({ theme }) => theme.mobile}) {
		margin-bottom: 40px;
	}
`
