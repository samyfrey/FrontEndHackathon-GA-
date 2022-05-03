import { StyledCard } from "./styles/Card.styled"
import { Button } from './styles/Button.styled'

export default function Card({ item: {id, number, title, body, alt, urlImg }}) {
    return (
        <StyledCard layout={id % 2 === 0 && 'row-reverse'}>
            <div>
                <h1 style={{fontSize: 50, color: "#E4E4E4"}}>{number}</h1>
                <h2>{title}</h2>
                <p>{body}</p>
                <Button> Learn More </Button>
            </div>
            <div>
                <img src={`${urlImg}`} alt={`${alt}`}/>
            </div>
        </StyledCard>
    )
}