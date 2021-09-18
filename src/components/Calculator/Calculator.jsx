import React from 'react';
import Controls from '../Controls/Controls';
import Display from '../Display/Display';
import { Wrapper } from './Calculator.style';

function Calculator() {
  // Logic here
  // Logic here

  return (
    <Wrapper>
      <Display displayValue={54} history="12 + 10 = " />
      <Controls />
    </Wrapper>
  );
}

export default Calculator;
