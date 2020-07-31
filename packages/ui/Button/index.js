import styled from 'styled-components';

export default styled.button.attrs({
  type: 'button',
})`
  padding: 10px 40px;
  border-style: solid;
  border-radius: 5px;
  text-transform: uppercase;
  -webkit-transition-duration: 0.4s;
  transition-duration: 0.4s;
  &:hover {
    transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateZ(0deg) skew(0deg, 0deg);
    opacity: 1;
    transform-style: preserve-3d;
  }
`;
