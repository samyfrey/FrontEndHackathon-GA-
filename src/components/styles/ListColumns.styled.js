import styled from 'styled-components'

export const ListColumns = styled.ul`
	display: flex;
	flex-wrap: wrap;
	width: 50%;
	padding-inline-start: 0px;
	font-size: 15px;
	// width: 50%;

	// & > div,
	& > ul {
		flex: 1;
	}

	@media (max-width: ${({ theme }) => theme.mobile}) {
		flex-direction: column;
        align-items: center;
	}
`
