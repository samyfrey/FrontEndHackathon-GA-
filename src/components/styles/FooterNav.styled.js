import styled from 'styled-components'

export const StyledFooterNav = styled.div`
	display: flex;
	align-items: flex-start;
	font-size: 12px;

	& > div,
	& > ul {
		flex: 1;
	};

	    @media(max-width: ${({ theme }) => theme.mobile}) {
        flex-direction: column;
        justify-content: center;
	
        
    }
`
