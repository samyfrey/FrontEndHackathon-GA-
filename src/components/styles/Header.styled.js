import styled from 'styled-components'
import { backgroundImg } from '../images/images.js'

export const StyledHeader = styled.header`
	background-image: url(${backgroundImg});
	background-size: cover;
	background-position: center;
	height: 800px;
	color: #ffff;
	ul {
        padding: 0;
        list-style-type: none;

    }
`


export const Nav = styled.nav`
    display: flex;
    align-items: center;
    justify-content: space-between;


    @media(max-width: ${( {theme }) => theme.mobile}) {
        flex-direction: column
    }
    `


export const Logo = styled.img`

	@media (max-width: ${({ theme }) => theme.mobile}) {
		margin-bottom: 40px;
	}
`
