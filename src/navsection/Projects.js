import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { Typography } from '@mui/material';
import Userdata from '../components/Userdata'

const Projects = () => {
  return (
    <>
    <CssBaseline />
      <Container fixed sx={{ marginTop: '4rem'}}>
        <Box sx={{ bgcolor: '#cfe8fc', height: '100vh' }}> 
        <Typography variant='h5'sx={{textAlign: 'center'}} >Displaying the User Details Using JsonPlaceholderApi </Typography>
          <Userdata />
        </Box>
      </Container>
    </>
  )
}

export default Projects