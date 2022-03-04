import { ThemeProvider } from 'styled-components'
import Header from './components/Header'
import GlobalStyles from './components/styles/Global'
import { learnMoreImg, ourSatisfiedText, ourWorksImg, ourWorksTxt, teamsImg } from './content'
import Card from './components/Card'
import { Container } from './components/styles/Container.styled.js'
import { WWDBest } from './components/WWDBest'
import { PhotoGallery } from './components/PhotoGallery'
import { GalleryContainer } from './components/styles/GalleryContainer'
import { StyledDivider } from './components/styles/Divider.styled'
import Divider from './components/Divider'
import { ourTeamWorksTxt } from './content'
import Footer from './components/Footer'


const theme = {
	colors: {
		header: '#ebfbff',
		body: '#fff',
		footer: '#0C245A',
	},
	mobile: '768px',
}

function App() {
  return (
		<ThemeProvider theme={theme}>
			<GlobalStyles />
			<Header />
			<Container>
				{learnMoreImg.map((item, index) => (
					<Card key={index} item={item} />
				))}
				<WWDBest />
				<StyledDivider>
					{ourWorksTxt.map((item, index) => (
						<Divider key={index} item={item} />
					))}
				</StyledDivider>
				<GalleryContainer>
					{ourWorksImg.map((item, index) => (
						<PhotoGallery key={index} item={item} />
					))}
				</GalleryContainer>
				<StyledDivider>
					{ourTeamWorksTxt.map((item, index) => (
						<Divider key={index} item={item} />
					))}
				</StyledDivider>
				<GalleryContainer>
					{teamsImg.map((item, index) => (
						<PhotoGallery key={index} item={item} />
					))}
				</GalleryContainer>
				<StyledDivider>
					{ourSatisfiedText.map((item, index) => (
						<Divider key={index} item={item} />
					))}
				</StyledDivider>
			</Container>
			<Footer />
		</ThemeProvider>
	)
}

export default App;
