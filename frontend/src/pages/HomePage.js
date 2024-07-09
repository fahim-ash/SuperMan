import React from 'react';
import { Grid, Container } from '@mui/material';
import ServiceIcon from '../components/serviceIcon';

const services = [
  { name: 'User Service', icon: '../../public/favicon.ico', route: '/service/user' },
  { name: 'Auth Service', icon: '../../public/favicon.ico', route: '/service/auth' },
  { name: 'Gateway', icon: '../../public/favicon.ico', route: '/service/gateway' },
  // Add more services here
];

const HomePage = () => (
  <Container>
    <Grid container spacing={2} justifyContent="center">
      {services.map((service, index) => (
        <Grid item key={index}>
          <ServiceIcon name={service.name} iconSrc={service.icon} route={service.route} />
        </Grid>
      ))}
    </Grid>
  </Container>
);

export default HomePage;
