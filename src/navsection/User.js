import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { Typography } from "@mui/material";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";

const User = () => {
  const [user, setUser] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get(
          `https://jsonplaceholder.typicode.com/users/${id}`
        );
        setUser(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchUser();
  }, [id]);

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <CssBaseline />
      <Container fixed sx={{ marginTop: "4rem" }}>
        <Box sx={{ bgcolor: "#cfe8fc", height: "100vh" }}>
          <Typography variant="h5" sx={{ textAlign: "center" }}>
            Displaying the User Details getting from through Id Base{" "}
          </Typography>
          <Card sx={{ minWidth: 275 }}>
            <CardContent>
              <Typography
                sx={{ fontSize: 14 }}
                color="text.secondary"
                gutterBottom
              >
                <h1>{user.name}</h1>
              </Typography>
              <Typography variant="h5" component="div">
                <p>Email: {user.email}</p>
              </Typography>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                <p>Phone: {user.address.city}</p>
              </Typography>
              <Typography variant="body2">
                <p>Website: {user.address.geo.lat}</p>
              </Typography>
            </CardContent>
            <CardActions>
              <Link to="/Blog">Home</Link>
            </CardActions>
          </Card>
        </Box>
      </Container>
    </>
  );
};

export default User;
