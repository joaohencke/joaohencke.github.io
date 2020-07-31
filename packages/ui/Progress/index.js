import styled from 'styled-components';
import classnames from 'classnames';

const Progress = styled.div.attrs({
  className: 'progress',
})``;

export default Progress;

Progress.Bar = styled.div.attrs(() => ({
  className: classnames('progress-bar'),
}))``;
