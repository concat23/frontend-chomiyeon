import { Box, Paper, Typography } from '@mui/material'
import React from 'react'

export const MPaper = ({title, fullHeight, children}) => {
  return (
    <Paper
        elevation={0}
        sx={{
            p:3,
            height: fullHeight ? "100%" : "unset",
            boxShadow: "rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset"
        }}
    >
        { title && (
            <Typography variant='body1' fontWeight={600} mb={3}>
                {title}
            </Typography>
        ) }

        <Box>
            {children}
        </Box>
    </Paper>
  )
}
