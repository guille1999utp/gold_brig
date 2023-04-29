import React from 'react';
import { NextPage } from 'next';
import { Box } from '@mui/material';
import Image from 'next/image';

const Footer: NextPage = () => {
  return (
    <footer className='site-footer'>
        <Box className="site-footer-content">
            <h4 className='text-center text-light fw-normal fs-1 site-footer-content-title-complete mb-5'>SOBRE <span className="site-footer-content-title">GOLD BRICK</span></h4>
            <Box className="d-flex flex-row justify-content-center pt-5 flex-wrap" >
                <Box className="d-flex flex-column">
                    <h5 className='text-light fs-3 fw-bolder mb-5'>NUESTRA META</h5>
                    <p className='site-footer-parrafo' style={{maxWidth:"300px"}}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                     Ut enim ad minim veniam, quis nostrud exbercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                       Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
                    </p>
                </Box>
                <Box className="d-flex flex-column ms-5 justify-content-center">
                    <h5 className='text-light fs-3 fw-bolder'>NUESTRAS <br></br> ESPECIALIZACIONES</h5>
                    <Image src="/images/hombreconlupa.png" alt="Banner" width={100} height={100} className='site-home__image' />
                    <p className='text-light fs-4'>
                        Think voluminous
                    </p>
                    <Image src="/images/porcentaje.png" alt="Banner" width={100} height={100} className='site-home__image' />
                    <p className='text-light fs-4'>
                        Think voluminous
                    </p>
                    <Image src="/images/sold.png" alt="Banner" width={100} height={100} className='site-home__image' />
                    <p className='text-light fs-4'>
                        Think voluminous
                    </p>
                </Box>
                <Box className="d-flex flex-column justify-content-center" sx={{flex:1,minWidth:"200px",maxWidth:"400px"}}>
                    <Image src="/images/casa.png" alt="Banner" fill className='site-home__image' />
                </Box>
            </Box>
        </Box>
    </footer>
  );
};

export default Footer;