import React from 'react';
import styled from '@emotion/styled';

const StyledButton = styled.button`
  grid-column: ${(props) => (props.isDouble ? 'span 2' : 'span 1')};
  font-size: 20px;
  color: #fff;
  border: none;
  height: 50px;
`;

const GrayButton = styled(StyledButton)`
  background: #4b4949;
  :hover {
    background: #777777;
  }
`;
const BlackButton = styled(StyledButton)`
  background: #171616;
  :hover {
    background: #403d3d;
  }
`;

const GreenButton = styled(StyledButton)`
  background: #1a7a2d;
  :hover {
    background: #2ac74a;
  }
`;

function CalculatorButton(props) {
  const buttonStyle = props.buttonStyle;
  const children = props.children;
  const isDouble = props.isDouble;
  if (buttonStyle === 'gray') {
    return <GrayButton>{children}</GrayButton>;
  }
  if (buttonStyle === 'black') {
    return <BlackButton>{children}</BlackButton>;
  }
  if (buttonStyle === 'green') {
    return <GreenButton isDouble={isDouble}>{children}</GreenButton>;
  }
  return <GrayButton>{children}</GrayButton>;
}

export default CalculatorButton;
