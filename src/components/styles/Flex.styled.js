import styled from 'styled-components'

export const Flex = styled.div`
	display: flex;
	justify-content: center;
	flex-direction: column;
	width: 50vw;
	height: 70vh;
	align-items: left;
    


	}

	@media (max-width: ${({ theme }) => theme.mobile}) {
		flex-direction: column;
        text-align: center;
        margin: auto;
        
	}

    `