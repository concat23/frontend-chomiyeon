import React from 'react';
import { TextField, Typography } from '@mui/material';

export const ValidateField = ({ label, value, onChange, error, disabled, ...rest }) => {
  return (
    <>
      <TextField
        label={label}
        value={value}
        onChange={onChange}
        fullWidth
        error={Boolean(error)}
        helperText={error}
        disabled={disabled}
        {...rest}
      />

      {error && (
        <Typography color="error" variant="caption">
          {error}
        </Typography>
      )}
    </>
  );
};

