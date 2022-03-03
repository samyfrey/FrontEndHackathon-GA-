import { ThemeProvider } from 'styled-components'
import Header from './components/Header'
import GlobalStyles from './components/styles/Global'
import { learnMore, ourWorks } from './content'
import Card from './components/Card'
import { Container } from './components/styles/Container.styled.js'
import { WWDBest } from './components/WWDBest'
import { PhotoGallery } from './components/PhotoGallery'
import { GalleryContainer } from './components/styles/GalleryContainer'

const theme = {
  colors: {
    header: '#ebfbff',
    body: '#fff',
    footer: '#003333'
  },
  mobile: '768px',
}

function App() {
  return (
		<ThemeProvider theme={theme}>
			<GlobalStyles />
			<Header />
			<Container>
				{learnMore.map((item, index) => (
					<Card key={index} item={item} />
				))}
			</Container>
			<WWDBest />
			{/* Our Works */}
			<GalleryContainer>
				{ourWorks.map((item, index) => (
					<PhotoGallery key={index} item={item} />
				))}
			</GalleryContainer>
		</ThemeProvider>
	)
}

export default App;
