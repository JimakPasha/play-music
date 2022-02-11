import { Container } from '@mui/material';
import React from 'react'
import Navbar from '../components/Navbar';

const MainLoyout:React.FC = ({children}) => {
  return (
    <>
    <Navbar />
        <Container>
            <div className="wrapper">
                {children}
            </div>
        </Container>
        <style jsx>
            {`
                .wrapper {
                    margin: 80px 0px;
                }
            `}
        </style>
    </>
  )
}

export default MainLoyout;