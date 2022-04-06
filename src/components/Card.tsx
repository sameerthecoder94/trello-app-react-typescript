import { CardContainer } from '../styles/styles';

interface CardProps {
  text: string;
}

function Card({ text }: CardProps) {
  return <CardContainer>{text}</CardContainer>;
}

export default Card;
