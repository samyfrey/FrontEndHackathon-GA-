
import SocialIcons from './SocialIcons'
import { Container } from './styles/Container.styled'
import { Flex } from './styles/Flex.styled'
import { StyledFooter } from './styles/Footer.styled'
import { StyledFooterNav } from './styles/FooterNav.styled'

export default function Footer() {
  const titleStyles = {
        fontWeight: 'bold'
    }

  return (

    // CONTACT US
    // FOOTER NAV


    <StyledFooter>
      <Container>

       <StyledFooterNav>

          <ul>
            <img src='./images/logo.svg' alt='' />
            <li>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua
            </li>
          <SocialIcons />
          </ul>
          <ul>
            <li style={titleStyles}>Product</li>
            <li>What We Do</li>
            <li>FAQ</li>
          </ul>

          <ul>
            <li style={titleStyles}>Support</li>
            <li>Blog</li>
            <li>Contact Us</li>
          </ul>
          <ul>
            <li style={titleStyles}>Legal</li>
            <li>Blog</li>
            <li>Contact Us</li>
            <li>Forum</li>
          </ul>
          <ul>
            <li style={titleStyles}>Login</li>
            <li>Legal Information</li>
            <li>Privacy Policy</li>
            <li>Report Abuse</li>
            <li>Terms of Services</li>
          </ul>
          <ul>
            <li style={titleStyles}>Company</li>
            <li>Web Hosting</li>
            <li>DreamCompute</li>
            <li>Contact Us</li>
          </ul>


       </StyledFooterNav>
        {/* <p>&copy; Copyright</p> */}

      </Container>
    </StyledFooter>
  )
}