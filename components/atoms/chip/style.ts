import { styled } from '@/styles/stitches.config';

export const ChipBackgropund = styled('div', {
  width: '100%',
  height: '156px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#ffffff',
  borderRadius: '10px',
  boxShadow:
    '0px 12px 16px -4px rgba(16, 24, 40, 0.1), 0px 4px 6px -2px rgba(16, 24, 40, 0.05)',
});

export const ChipColorBackground = styled('div', {
  width: '100%',
  height: '80px',
  borderTopLeftRadius: '10px',
  borderTopRightRadius: '10px',
});

export const ChipColorInfoBox = styled('div', {
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  marginTop: '12px',
});
