import React from 'react';

import ColorGridOrganism from '@/components/organisms/ColorGrid';
import { ColorContext } from '@/contexts/color.context';

interface Props {
  color: string;
}

const ColorsTemplate = ({ color = 'Primary' }: Props) => {
  return (
    <ColorContext.Provider value={color}>
      <ColorGridOrganism />
    </ColorContext.Provider>
  );
};

export default ColorsTemplate;
