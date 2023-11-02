import React, { FC } from 'react';
import { CircularProgress, Box } from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledLoadingWrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  '&>div': {
    marginTop: theme.spacing(2)
  }
}));
interface LoadingProps {
  height?: number | string;
  loadingText?: string | React.ReactElement;
}
export const Loading: FC<LoadingProps> = ({ height, loadingText, ...props }) => {
  const lang = localStorage.getItem('lang') || 'en';
  return (
    <StyledLoadingWrapper sx={{ height: `${height}` }} {...props}>
      <CircularProgress />
      <Box>{loadingText || 'loading...'}</Box>
    </StyledLoadingWrapper>
  );
};
