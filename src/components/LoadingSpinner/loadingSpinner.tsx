import React, { FC } from 'react';
import { Box, CircularProgress } from '@mui/material';

interface LoadingSpinnerProps {
  style: React.CSSProperties;
}

export const LoadingSpinner: FC<LoadingSpinnerProps> = ({ style }) => {
  return (
    <Box sx={style}>
      <CircularProgress />
    </Box>
  );
};