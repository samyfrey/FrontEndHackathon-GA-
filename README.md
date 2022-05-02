


Deployed site: https://samyfrey.github.io/frontendhackathon-ga/

Site to replicate: [Business Mockup](https://github.com/dcartist/FrontEndHackathon/blob/master/MOCKUP/Business/BusinessLandingPage.png)

# Frontend Hackathon Mockup 

Responsive mock up business website built during a 2-day frontend hackathon.
See screenshots at the end of the readme. 

Tech stack used: ReactJS and react-styled components.

## Objective & Strategy 

For this hackathon, I identified various parts in the site that could be reproduced using the same component (photo gallery, buttons and cards). In only a couple of hours, I learned how to use styled components which I found to be the most appropriate technology to do so. 

My main objective was to standardize the code as much as possible and only use a content file to feed the rendering components. 

## Coding Approach

All of the content is stored in a content.js file including image size, height, flex etc. 

I built my app.js file passing in all the properties defined in the content.js file as prop in each reusable component (see PhotoGallery for example) mapping through the array of content.

```
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
				<BlueDivider/>
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
				<Clients />
			</Container>
			<Footer />
		</ThemeProvider>
	)
}


export default App;
```

**Example of reusuable component, <PhotoGallery.**

This component is rendered by using the props passed in from the App.JS file.

```
export const PhotoGallery = ({item: {height, flexGrow, width, name, urlImg }}) => {

    const imageStyle = {
        width: `${width}`,
        height: `${height}`, 
        flexGrow: `${flexGrow}`, 
        objectFit: 'cover',
        border: '5px solid white',


    }

    return (
            <div>
            <img src={`${urlImg}`} alt='' style={imageStyle}/>
            <p>{name}</p>
            </div>

      
    )
}
```
## Challenges

My biggest challenge was building the photo grid. As I didn't want to hardcode any property in the component, I had to find a way to render images dynamically based on each image's defined size. After multiple iterations, I found that using the flex-wrap property and defining a width/height for each content image, along with cover-fit was the best way for doing this. See the result: 

<p align="center">
<img src="https://user-images.githubusercontent.com/89148403/166308427-5c083631-644e-42bc-8556-aaea5e471ca9.png" alt="site-overview" width="700" >
</p>

## Screenshots
![screencapture-localhost-3000-frontendhackathon-ga-2022-05-02-14_58_29](https://user-images.githubusercontent.com/89148403/166308292-25209ebd-fefb-497f-8114-9c142777a3c0.png)
