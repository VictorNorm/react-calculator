import React from 'react';
import CalculatorButton from '../CalculatorButton/CalculatorButton';
import { Wrapper } from './Controls.style';

function Controls() {
  return (
    <Wrapper>
      <CalculatorButton buttonStyle="gray">{'<-'}</CalculatorButton>
      <CalculatorButton buttonStyle="gray">CE</CalculatorButton>
      <CalculatorButton buttonStyle="gray">C</CalculatorButton>
      <CalculatorButton buttonStyle="gray">/</CalculatorButton>
      <CalculatorButton buttonStyle="black">7</CalculatorButton>
      <CalculatorButton buttonStyle="black">8</CalculatorButton>
      <CalculatorButton buttonStyle="black">9</CalculatorButton>
      <CalculatorButton buttonStyle="gray">*</CalculatorButton>
      <CalculatorButton buttonStyle="black">4</CalculatorButton>
      <CalculatorButton buttonStyle="black">5</CalculatorButton>
      <CalculatorButton buttonStyle="black">6</CalculatorButton>
      <CalculatorButton buttonStyle="gray">-</CalculatorButton>
      <CalculatorButton buttonStyle="black">1</CalculatorButton>
      <CalculatorButton buttonStyle="black">2</CalculatorButton>
      <CalculatorButton buttonStyle="black">3</CalculatorButton>
      <CalculatorButton buttonStyle="gray">+</CalculatorButton>
      <CalculatorButton buttonStyle="black">0</CalculatorButton>
      <CalculatorButton buttonStyle="black">,</CalculatorButton>
      <CalculatorButton buttonStyle="green" isDouble>
        =
      </CalculatorButton>
    </Wrapper>
  );
}

export default Controls;
