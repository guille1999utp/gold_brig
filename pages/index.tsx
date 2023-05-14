import { Inter } from 'next/font/google';
import LayoutHomePage from '@/src/layouts/home';
import Image from 'next/image';
import { Box, Button, Checkbox, Divider, FormControlLabel, InputLabel, MenuItem } from '@mui/material';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { AiOutlineSearch } from "react-icons/ai";
import { MdLocationOn } from "react-icons/md";
import Footer from '@/src/components/footer';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <LayoutHomePage title='Gold Brick'>
      <Box className="site-home">
        <Image
          src="/images/banner.png"
          alt="Banner"
          fill
          className='site-home__image'
        />
        <Box className="site-home__content">
          <h1 className='content__title'>COMPRA, RENTA Y VENDE</h1>
          <p className='content__description'>DE LA MANERA MAS CONFIABLE</p>
        </Box>
      </Box>
      <Box className="site-home-search mt-5">
        <Box className="site-home-search__contain">
          <Box className="">
            <form className="site-home-search__form d-flex flex-row justify-content-between">
              <Box className="d-flex flex-column justify-content-between">
                <Button variant="contained" className='site-home-search__button background-color-cuaternario'>Comprar</Button>
                <Button variant="contained" className='site-home-search__button bg-light text-color-cuaternario'>Rentar</Button>
              </Box>
              <Box className="d-flex flex-row flex-fill pt-4">
                <Box className="d-flex flex-column align-self-end ms-4  flex-fill">
                  <InputLabel id="ubicacion" className='site-home-search__label'>UBICACIÓN</InputLabel>
                  <Select
                    labelId="demo-simple-select-autowidth-label"
                    id="ubicacion"
                    autoWidth
                    startAdornment={
                      <MdLocationOn fontSize={40} />
                    }
                    label="Age"
                  >
                    <MenuItem value="">
                      None
                    </MenuItem>
                    <MenuItem value={10}>Twenty</MenuItem>
                    <MenuItem value={21}>Twenty one</MenuItem>
                    <MenuItem value={22}>Twenty one and a half</MenuItem>
                  </Select>
                </Box>
                <Divider orientation="vertical" flexItem className='mx-4 site-home-search__divider' />
                <Box className="d-flex flex-column align-self-end justify-content-between">
                  <InputLabel id="ubicacion" className='site-home-search__label'>PRECIO MINIMO</InputLabel>
                  <Select
                    labelId="demo-simple-select-autowidth-label"
                    id="ubicacion"
                    fullWidth
                    label="Age"
                  >
                    <MenuItem value="">
                      Min
                    </MenuItem>
                    <MenuItem value={10}>Twenty</MenuItem>
                    <MenuItem value={21}>Twenty one</MenuItem>
                    <MenuItem value={22}>Twenty one and a half</MenuItem>
                  </Select>
                </Box>
                <Box className="d-flex flex-column align-self-end justify-content-between ms-4">
                  <InputLabel id="ubicacion" className='site-home-search__label'>PRECIO MAXIMO</InputLabel>
                  <Select
                    labelId="demo-simple-select-autowidth-label"
                    id="ubicacion"
                    autoWidth
                    label="Age"
                  >
                    <MenuItem value="">
                      Max
                    </MenuItem>
                    <MenuItem value={10}>Twenty</MenuItem>
                    <MenuItem value={21}>Twenty one</MenuItem>
                    <MenuItem value={22}>Twenty one and a half</MenuItem>
                  </Select>
                </Box>
                <Button variant="contained" className='background-color-yellow mb-3 ms-5 site-home-search__submit'><AiOutlineSearch fontSize={70} /></Button>
              </Box>
            </form>
          </Box>
          <p className='text-normal text-center mt-5'>Sujerencia de texto : Encuentra tu hogar ideal usando nuestro navegador inteligente</p>
        </Box>
      </Box>
      <Box className="site-home-service">
        <h3 className="site-home-service__title">INMOBILIARIA GOLD BRICK</h3>
        <p className="site-home-service__description">QUIENES SOMOS</p>
      </Box>
      <Box sx={{width:"70%",padding:"0 110px"}}>
        <p className='text-Amarai-Light fs-5 fw-bold'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.
              Curabitur tempor quis eros tempus lacinia. 
        </p>
      </Box>
      
    <Footer />
    <Box className="d-flex flex-row" sx={{paddingBottom:"50px",background:"#DFD6BF"}}>
    <Image
          src="/images/imageHome1.png"
          alt="image-home-1"
          fill
          className='site-home-images'
      />
    <Image
        src="/images/imageHome2.png"
        alt="image-home-2"
        fill
        className='site-home-images'
      />
    <Image
      src="/images/imageHome3.png"
      alt="image-home-3"
      fill
      className='site-home-images'
      />
      
    </Box>
    <h2 className='text-center mt-5 mb-5'>
    NUESTROS SERVICIOS
    </h2>
    <Box className="d-flex flex-row" sx={{margin:"50px 110px 0"}}>
        <Box>
          <h5 className='text-Amarai-Light  fw-bold text-color-yellow ornament-text-yellow position-relative'>
            SERVICIO 1
          </h5>
          <p className='text-Amarai-Regular fs-5 mt-5'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, 
          </p>
        </Box>
        <Box>
          <h5 className='text-Amarai-Light fw-bold text-color-yellow ornament-text-yellow position-relative'>
            SERVICIO 1
          </h5>
          <p className='text-Amarai-Regular fs-5  mt-5'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, 
          </p>
        </Box>
    </Box>
    </LayoutHomePage>
  )
}
