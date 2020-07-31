import styled from 'styled-components';
import classnames from 'classnames';

const Card = styled.div.attrs((props) => ({
  className: classnames('card', { 'bg-dark': props.dark }),
}))``;

export default Card;

Card.Body = styled.div.attrs({ className: 'card-body' })``;

Card.Title = styled.h4.attrs({ className: 'card-title' })``;
