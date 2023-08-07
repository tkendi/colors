import React, { useContext } from 'react';

import { Text } from '@/components/atoms/Text';
import {
  ChipBackgropund,
  ChipColorBackground,
  ChipColorInfoBox,
} from '@/components/atoms/chip/style';
import { styled } from '@/styles/stitches.config';
import { themes } from '@/styles/theme';
import { ColorContext } from '@/contexts/color.context';

const ColorGridOrganism = () => {
  const color = useContext(ColorContext);
  return (
    <>
      <Text css={{ fontSize: '24px' }}>Color: {color}</Text>
      <ChipWrap>
        {Object.entries(themes).map(([key, value], index) => {
          if (!key.includes(color)) return;
          return (
            <ChipBackgropund key={`${key}-${index}`}>
              <ChipColorBackground css={{ backgroundColor: value }} />
              <ChipColorInfoBox>
                <Text css={{ margin: '0px', marginLeft: '12px' }}>{key}</Text>
                <Text css={{ margin: '0px', marginLeft: '12px' }}>{value}</Text>
              </ChipColorInfoBox>
            </ChipBackgropund>
          );
        })}
      </ChipWrap>
    </>
  );
};

export default ColorGridOrganism;

const ChipWrap = styled('div', {
  width: '100%',
  height: 'auto',
  display: 'grid',
  gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr',
  gap: '0px 16px',
});
