import styled from 'styled-components';
import classnames from 'classnames';

const nav = styled.nav.attrs((props) => ({
  className: classnames('navbar navbar-expand-lg', {
    'bg-dark navbar-dark': props.dark,
    'navbar-light bg-light': props.light,
  }),
}))`
  color: #fad700;
`;

export default nav;

nav.Items = styled.ul.attrs({ className: 'navbar-nav flex-row' })``;

nav.Item = styled.li.attrs((props) => ({ className: classnames('nav-item ml-1', { active: props.active }) }))``;

nav.Brand = styled.a.attrs({ className: 'navbar-brand' })``;

nav.Link = styled.a.attrs({ className: 'nav-link' })``;
