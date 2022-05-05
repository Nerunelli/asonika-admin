import React, { useState } from 'react';
import { ArrowImg, Wrapper } from './styled';

// const categories = ['First cat', 'Sec cat', 'Thrd cat'];
// const subCat = ['First subcat', 'Sec subcat', 'Thrd subcat'];

export const Accordion: React.FC = ({ children }) => {
  const [open, setOpen] = useState(false);
  return (
    <Wrapper onClick={() => setOpen(prev => !prev)}>
      {children}
      <ArrowImg open={open} />
    </Wrapper>
  );
};
