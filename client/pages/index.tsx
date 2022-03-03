import React from 'react';
import { Typography } from '@mui/material';
import MainLoyout from '../layouts/MainLoyout';

const Index = () => {
  return (
    <MainLoyout>
      <div className="center">
          <Typography variant="h3" align="center">Welcome to the application PLAY-MUSIC!</Typography>
          <Typography variant="h5" align="center">here are the best tracks</Typography>
          <style jsx>
            {`
              .center {
                margin-top: 250px;
              }
            `}
          </style>
      </div>
    </MainLoyout>
  )
}

export default Index;
