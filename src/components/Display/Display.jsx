import React from 'react';
import { Wrapper, HistoryDisplay, MainDisplay } from './Display.style';

function Display(props) {
  const displayValue = props.displayValue;
  const history = props.history;

  return (
    <Wrapper>
      <HistoryDisplay>{history}</HistoryDisplay>
      <MainDisplay>{displayValue}</MainDisplay>
    </Wrapper>
  );
}

export default Display;
