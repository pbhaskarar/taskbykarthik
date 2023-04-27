import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { Button, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, Navigate } from 'react-router-dom';



const Home = () => {
  const [user, setUser] = useState([]);
  const [auth, setAuth] = useState(false);
  

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users');
        // console.log(response.data);
        setUser(response.data);
        
      } catch (error) {
        console.error(error);
      }
    };

    fetchUsers();
  },[]);

  if(auth){
    return(
      <Navigate to='/Contact' />
    )
  };
  return (
    <>
     <CssBaseline />
      <Container fixed sx={{ marginTop: '4rem'}}>
        <Box sx={{ bgcolor: '#cfe8fc', height: '100vh' }}> 
        <Typography variant='h5'sx={{textAlign: 'center'}} >Displaying the User Details Using JsonPlaceholderApi </Typography>
          {user.map(item => <li key={item.id}>
            {/* <a href={`/user/${item.id}`}>{item.name}</a> */}
            <Link to={`/user/${item.id}`}>{item.name}</Link>
          </li>)}
          <center>
            <Button  variant="contained" onClick={() =>{setAuth(true)}}>Contact</Button>
          </center>
        </Box>
      </Container>
    </>
  )
}

export default Home