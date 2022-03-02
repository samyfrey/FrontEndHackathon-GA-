import { StyledHeader, Nav, Logo, Image } from './styles/Header.styled'
import { Container } from './styles/Container.styled'
import { Button } from './styles/Button.styled'
import { ListColumns } from './styles/ListColumns.styled'
import { Flex } from './styles/Flex.styled'
import { SocialList } from './styles/SocialList.styled'

export default function Header() {
	return (
		<StyledHeader>
			<Container>
				<Nav>
					<Logo src='./images/logo.svg' alt='' />
					<ListColumns>
				
						<ul>Work</ul>
						<ul>Services</ul>
						<ul>Company</ul>
						<ul>Blogs</ul>
						<ul>Resources</ul>
				
					</ListColumns>
					<Button> Start a Project </Button>
				</Nav>

				<Flex>
					<div>
						<h1>Aliquet urna velit molestie mi ut</h1>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
						</p>

					</div>
					<div style={{display: 'inline-block'}}>
						<Button>Contact Us</Button>
						<p>Our Works</p>
					</div>

						
				</Flex>
				{/* <SocialList> */}
					<ListColumns>
						<ul>Facebook</ul>
						<ul>Instagram</ul>
						<ul>Dribble</ul>
						<ul>Behance</ul>
					</ListColumns>

				{/* </SocialList> */}

			</Container>
		</StyledHeader>
	)
}
