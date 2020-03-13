import React from 'react';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';

export default function NavBar() {
  return (
    <Paper elevation={0}>
      <Box>18 C</Box>
      <Box>Mariupol</Box>
      <Box>Clear, Wind - 2.77 meter per second</Box>
    </Paper>
  );
}
