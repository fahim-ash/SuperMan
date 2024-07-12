import React from 'react';
import { Grid, Container } from '@mui/material';
import ServiceIcon from '../components/serviceIcon';
import WhatshotTwoToneIcon from '@mui/icons-material/WhatshotTwoTone';
import LockTwoToneIcon from '@mui/icons-material/LockTwoTone';
import RouterTwoToneIcon from '@mui/icons-material/RouterTwoTone';


const services = [
  { name: 'User Service', IconSrc: WhatshotTwoToneIcon, route: '/service/user' },
  { name: 'Auth Service', IconSrc: LockTwoToneIcon, route: '/service/auth' },
  { name: 'Gateway', IconSrc: RouterTwoToneIcon, route: '/service/gateway' },
  // Add more services here
];

const HomePage = () => (
  <Container>
    <Grid container spacing={2} justifyContent="center">
      {services.map((service, index) => (
        <Grid item key={index}>
          <ServiceIcon name={service.name} IconSrc={service.IconSrc} route={service.route} />
        </Grid>
      ))}
    </Grid>
  </Container>
);

export default HomePage;
