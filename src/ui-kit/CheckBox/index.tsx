import React, { useState } from 'react';
import { CheckboxContainer, HiddenCheckbox, Icon, StyledCheckbox } from './styled';

export const CheckBox: React.FC = () => {
  const [checked, setChecked] = useState(false);

  const onChange = () => {
    setChecked(checked => !checked);
  };

  return (
    <>
      <CheckboxContainer>
        <HiddenCheckbox checked={checked} onChange={onChange} />
        <StyledCheckbox checked={checked}>
          <Icon viewBox="0 0 24 24">
            <polyline points="20 6 9 17 4 12" />
          </Icon>
        </StyledCheckbox>
      </CheckboxContainer>
    </>
  );
};
