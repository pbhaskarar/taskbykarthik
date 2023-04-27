import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

import FormControlsFields from '../components/FormControlsFields'

export default function Blog() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container fixed>
        <Box sx={{ bgcolor: '#cfe8fc', height: '100vh' }}>

        <FormControlsFields />


      </Box>
        
      </Container>
    </React.Fragment>
  );
}
